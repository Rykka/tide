module.exports = function(io) {

    Object.defineProperty(Object.prototype, 'map', {
        value: function(f, ctx) {
            ctx = ctx || this;
            var self = this, result = {};
            Object.keys(self).forEach(function(k) {
                // result.push(f.call(ctx, self[k], k, self)); 
                result[k] = f.call(ctx, self[k], k, self);
            });
            return result;
        }
    });
    function getClientList() {

        return io.sockets.sockets.map(function(s) {
            return {name:s.name, id:s.id};
        })
    }
    function getSocketById(id){
        return io.sockets.sockets[id]
    }

    io.on('connection', function(socket){

        socket.name = Math.floor(Math.random() * 10000)
        // socket.set('name', socket.name)
        // console.log(socket.name)

        io.emit('user connected', socket.name)

        socket.emit('setup', {
            id: socket.id,
            name: socket.name
        })
        var _player ={id:socket.id, name:socket.name}

        io.emit('client_list', getClientList())
        socket.on('get client list',function(){
            io.emit('client_list', getClientList())
        } )

        socket.on('disconnect', function(){
            io.emit('user disconnected', socket.name);
            io.emit('client_list', getClientList())
        });

        socket.on('chat message', function(msg){
          console.log('message: ' + msg);
          io.emit('chat message', {msg:msg, uid:socket.id, name:socket.name, mid:new Date().getTime()+socket.id, type:1});
        });

        socket.on('change to name', function(_new){

              console.log('name: ' + _new);

              var _old = socket.name
              socket.name = _new
              io.emit('name changed', {from:_old, to:_new});
              setTimeout(function() {  
                  io.emit('client_list', getClientList())
              }, 20);
        });
        socket.on('invite game', function(g){
            console.log(g)
            console.log(socket.id)

            var _s = getSocketById(g.to.id)
            _s.emit('invite game by', g.from)
            // }
        })
        socket.on('accept game', function(from){
            var _s = getSocketById(from.id)
            socket.emit('start game with', {from:from, to:{id:socket.id, name:socket.name}})
            _s.emit('start game with', {from:from, to:{id:socket.id, name:socket.name}})


            var room_id = 'game room ' + Math.floor(Math.random() * 50000)


            io.to(room_id).emit('hello', room_id)
            socket.join(room_id)
            _s.join(room_id)
            io.to(room_id).emit('join room', _player)
            io.to(room_id).emit('join room', from)

            if (_s.is_in_game || socket.is_in_game) {
                return console.log('User already in a game')
            }

            var Game = require('../game')
            var Player = require('../game/player')

            var p1 = new Player(_s) // from
            var p2 = new Player(socket) // to

            var g1 = new Game(p1, p2, 0, io.to(room_id))

            g1.start()

        })
        socket.on('reject game', function(from){
            var _s = getSocketById(from.id)
            _s.emit('game reject by', {id:socket.id, name:socket.name})
        })

    })
}
