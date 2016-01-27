import store from './store'
// var store = require('./store')
var socket = io();

socket.on('client_list' ,(client_list)=> {
    store.dispatch({type:'CLIENT', state:{client_list:client_list}})
})

socket.on('chat message', function(msg){
    store.dispatch({type:'MESSAGE', message:msg})
   // $('#messages').append($('<li>').text(msg));
});

socket.on('name changed', function(data){

    console.log('user changed name:' + data.from +' to ' + data.to)

    if (socket.name == data.from) {

        console.log('change name to ' + data.to)

        socket.name = data.to
        $('#name').text(data.to);
    }

});

socket.on('setup', function(data){
    console.log('current user:' + data.name)
    console.log('current id:' + data.id)
    socket.name = data.name
    socket.id = data.id
    store.dispatch({type:'USER', user:{id:data.id, name:data.name}})
});

socket.on('user connected', function(msg){
    console.log('a user connected:' + msg)
});

socket.on('user disconnected', function(msg){
    console.log('a user disconnected:' + msg )
});

socket.on('connect', function(){
    console.log('connect to server')
});

socket.on('invite game by', function(from){
    // console.log('invite by' + g)
    var k = confirm('Invite by user ' + from.name)
    if (k) {
        console.log('accept')
        socket.emit('accept game', from)
    } else {
        console.log('reject')
        socket.emit('reject game', from)
    }
});

socket.on('start game with', function(g){
    console.log('start game with' + g.from.name +':' + g.to.name)
});

socket.on('game reject by', function(to){
    alert('game reject by' +':' + to.name)
});

socket.on('hello', function(room){
    console.log('hello' + room)
})

socket.on('join room', function(user){
    console.log(user.name + ' join room')
})

socket.on('player won', function(user){
    console.log('player won ' + user)
})

socket.on('choose method', function(){
    console.log('Use Skill Or Attack?')
})

socket.on('log', function(msg){
    var message = {msg:msg, uid:socket.id, name:'logging', mid:new Date().getTime()+socket.id, type:1}
    store.dispatch({type:'MESSAGE', message:message})
})

socket.on('game status', function(stats){
    store.dispatch({type:'GAME', game:stats})
})
// $(document).on('submit', 'form', function(){
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
// });

// $(document).on('click', '#name', function(){
//     console.log('click')
//     socket.emit('change to name', 'test1');
//     return false;
// });
export default socket
