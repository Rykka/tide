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

socket.on('nickname changed', function(data){

    console.log('user changed nickname:' + data.from +' to ' + data.to)

    if (socket.nickname == data.from) {

        console.log('change nickname to ' + data.to)

        socket.nickname = data.to
        $('#nickname').text(data.to);
    }

});

socket.on('setup', function(data){
    console.log('current user:' + data.nickname)
    console.log('current id:' + data.id)
    socket.nickname = data.nickname
    socket.id = data.id
    store.dispatch({type:'USER', user:{id:data.id, name:data.nickname}})
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

// $(document).on('submit', 'form', function(){
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
// });

// $(document).on('click', '#nickname', function(){
//     console.log('click')
//     socket.emit('change to nickname', 'test1');
//     return false;
// });
export default socket
