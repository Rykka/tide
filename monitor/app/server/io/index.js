module.exports = function(io) {

    // function findClientsSocket(roomId, namespace) {
    //     var res = []
    //     , ns = io.of(namespace ||"/");    // the default namespace is "/"
    //
    //     if (ns) {
    //         for (var id in ns.connected) {
    //             if(roomId) {
    //                 var index = ns.connected[id].rooms.indexOf(roomId) ;
    //                 if(index !== -1) {
    //                     res.push(ns.connected[id]);
    //                 }
    //             } else {
    //                 res.push(ns.connected[id]);
    //             }
    //         }
    //     }
    //     return res;
    // }

    function getClientList() {

        // var clients = findClientsSocket();
        // var clients_list=[];
        //
        // for (var i=0; i<clients.length; i++) {
        //     console.log(clients[i].id)
        //     console.log(clients[i].name)
        //     clients_list.push(clients[i].id)
        // }
        // return clients_list

        return io.sockets.sockets.map(function(s) {
            return {nickname:s.nickname, id:s.id};
        })

    }

    io.on('connection', function(socket){

        socket.nickname = Math.floor(Math.random() * 10000)
        // socket.set('nickname', socket.nickname)
        console.log(socket.nickname)

        io.emit('user connected', socket.nickname)

        socket.emit('setup', {
            id: socket.id,
            nickname: socket.nickname
        })

        io.emit('client_list', getClientList())

        socket.on('disconnect', function(){
            io.emit('user disconnected', socket.nickname);
            io.emit('client_list', getClientList())
        });

        socket.on('chat message', function(msg){
          console.log('message: ' + msg);
          io.emit('chat message', msg);
        });

        socket.on('change to nickname', function(_new){

              console.log('nickname: ' + _new);

              var _old = socket.nickname
              socket.nickname = _new
              io.emit('nickname changed', {from:_old, to:_new});
              setTimeout(function() {  
                  io.emit('client_list', getClientList())
              }, 20);
        });

    })
}
