(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var store = require('./store')
var socket = io();

socket.on('client_list', function (client_list) {
    _store2.default.dispatch({ type: 'CLIENT', state: { client_list: client_list } });
});

socket.on('chat message', function (msg) {
    _store2.default.dispatch({ type: 'MESSAGE', message: msg });
    // $('#messages').append($('<li>').text(msg));
});

socket.on('name changed', function (data) {

    console.log('user changed name:' + data.from + ' to ' + data.to);

    if (socket.name == data.from) {

        console.log('change name to ' + data.to);

        socket.name = data.to;
        $('#name').text(data.to);
    }
});

socket.on('setup', function (data) {
    console.log('current user:' + data.name);
    console.log('current id:' + data.id);
    socket.name = data.name;
    socket.id = data.id;
    _store2.default.dispatch({ type: 'USER', user: { id: data.id, name: data.name } });
});

socket.on('user connected', function (msg) {
    console.log('a user connected:' + msg);
});

socket.on('user disconnected', function (msg) {
    console.log('a user disconnected:' + msg);
});

socket.on('connect', function () {
    console.log('connect to server');
});

socket.on('invite game by', function (from) {
    // console.log('invite by' + g)
    var k = confirm('Invite by user ' + from.name);
    if (k) {
        console.log('accept');
        socket.emit('accept game', from);
    } else {
        console.log('reject');
        socket.emit('reject game', from);
    }
});

socket.on('start game with', function (g) {
    console.log('start game with' + g.from.name + ':' + g.to.name);
});

socket.on('game reject by', function (to) {
    alert('game reject by' + ':' + to.name);
});

socket.on('hello', function (room) {
    console.log('hello' + room);
});

socket.on('join room', function (user) {
    console.log(user.name + ' join room');
});

socket.on('player won', function (user) {
    console.log('player won ' + user);
});

socket.on('choose method', function () {
    console.log('Use Skill Or Attack?');
});

socket.on('log', function (msg) {
    console.log(msg);
});

socket.on('game status', function (stats) {
    _store2.default.dispatch({ type: 'GAME', game: stats });
});
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
exports.default = socket;

},{"./store":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = (typeof window !== "undefined" ? window['Redux'] : typeof global !== "undefined" ? global['Redux'] : null);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function clientList() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { client_list: [], messages: [] } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CLIENT':
      return Object.assign({}, state, { client_list: action.state.client_list });
    case 'MESSAGE':
      return Object.assign({}, state, { messages: [].concat(_toConsumableArray(state.messages), [action.message]) });
    case 'USER':
      return Object.assign({}, state, { user: action.user });
    case 'GAME':
      return Object.assign({}, state, { game: action.game });
    default:
      return state;
  }
}

exports.default = (0, _redux.createStore)(clientList);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
