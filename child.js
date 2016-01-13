var net = require('net');

var main_server_host = 'localhost'
var main_server_port = '7000'

var shortid = require('shortid');

var monitor = require('./monitor')
var cluster = require('cluster');


var Child = function(port){

    var client = this.client = new net.Socket()

    var id = this.id = shortid.generate()

    var uptimes = this.uptimes = 1
    var server_port = this.server_port = port

    // interval
    var s

    client.on('data', function(data) {
       // Got Data
    });

    client.on('close', function() {
       // Close
       console.log('CLOSE CLIENT')
       stopChildServer(server_port)
       clearInterval(s)
       // monitor
       //     .dict('BROWSER CONNECTION')
       //     .remove(port);
       
    });

    client.on('end', function() {
       // Close
       console.log('end CLIENT')
    });

    client.on('error', function(err) {
       // Handler Error Here
       console.log('ERROR')
       console.log(err)
    });

    client.on('connect', function() {
        client.write('JSON://'+ JSON.stringify({
            id: id,
            port:port
        }))
        s = startChildServer(server_port)
    });

    client.connect(main_server_port, main_server_host)
    return this

}

Child.prototype = {
    close() {
        // this.client.end()
        this.client.destroy()
    }
}

var SERVERS = {}
function stopChildServer(port) {
    console.log('CLOSE CHILD SERVER')
    SERVERS[port].close()
    delete SERVERS[port]
}

function startChildServer(port){
    var conn_num = 0
    var msg_num = 0
    // START CHILD SERVER
    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);

    server.listen(port);
    SERVERS[port] = server

    app.get('/', function (req, res) {
      res.sendfile(__dirname + '/index.html');
    });

    io.on('connection', function (socket) {
        monitor.log('one connected to ' + port);
        conn_num++

      socket.emit('news', { hello: 'world' });

      socket.on('timing', function (data) {
        msg_num++
      });

      socket.on('disconnect', function () {
        conn_num--
        monitor.log('one disconnected to '+ port);
      });
    });

    // log server status of connection
    var s = setInterval(function() {
        // monitor
        //     .dict('BROWSER CONNECTION')
        //     .set(port, ' browser:' + conn_num + ' msg:' + msg_num);
        monitor
            .log(port+ ': browser:' + conn_num + ' msg:' + msg_num);
    }, 1000);
    return s
}
module.exports = Child
