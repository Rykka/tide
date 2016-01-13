var net = require('net');

var server_host = 'localhost'
var server_port = '7000'

var server = net.createServer();

var conn_num = 0
var msg_num = 0

var monitor = require('./monitor')

var connected = {}

server.on('connection', function(conn) {

    conn.setTimeout(0);
    conn.setNoDelay(true);
    //conn.setKeepAlive(true, 100);

    conn_num++

    var clientHost = conn.remoteAddress;
    var clientPort = conn.remotePort;
    var clientAddr = clientHost + ":" + clientPort;

    monitor.log('Child connected: ' + clientAddr)
    connected[clientAddr] = conn
    conn.msg_num = 0

    // var port ,id
    conn.on('data', function(data) {
        var _d = data.toString()
        if (/^JSON:\/\//.test(_d)) {
            d = JSON.parse(_d.replace(/^JSON:\/\//, ''))
            conn.port = d.port
            conn.id = d.id
        }

        conn.msg_num++
    });

    // log server status of connection
    var s = setInterval(function() {
        monitor
            .dict('CHILD CONNECTION')
            .set(conn.port, '[' + clientAddr + '] ' + ' :  msg:' + conn.msg_num);
    }, 1000);

    conn.on('close', function(had_error) {
        conn_num--
        delete connected[clientAddr]
        monitor.log('Child disconnected:' + clientAddr)
        monitor
            .dict('CHILD CONNECTION')
            .remove(conn.port);
        clearInterval(s)
    });

});

server.on('error', function(err){
    monitor.log('SERVER ERROR')
    monitor.log(err)
})


var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

var Child = require('./child')
var START_PORT= 9000

var TOTAL = numCPUs
var workers = []

if (cluster.isMaster) {
    console.log('Master')
    server.listen(server_port, server_host);

    cluster.on('exit', function(code, signal) {
      if( signal ) {
        console.log("worker was killed by signal: "+signal);
      } else if( code !== 0 ) {
        console.log("worker exited with error code: "+code);
      } else {
        console.log("worker success!");
      }
    });

    for(var i=0;i<TOTAL;i++) {
        console.log('i:'+ i)
        var worker = cluster.fork({START_PORT:START_PORT++})
        workers.push(worker)

    }


    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(getRandomInt(0,3))
    console.log(getRandomInt(0,3))
    console.log(getRandomInt(0,3))

    var m = setInterval(function() {  
        var len = workers.length
        if (!len) return clearInterval(m)

        var ran = getRandomInt(0, len)
            console.log('RAN  '+ ran)
        var k = workers.splice(ran,1)[0]
        // var k = workers[ran]
        console.log('close k:' + k.id)
        // k.kill()
        k.send('shutdown')
    }, 3500);

} else {
    console.log('WORKER')
    new Child(process.env.START_PORT)
    process.on('message', function(msg){
        console.log('RECEIVE:' +msg)
            if (msg=='shutdown') {
                // process.kill(process.pid)
                process.exit(0)
            }
    })
}

