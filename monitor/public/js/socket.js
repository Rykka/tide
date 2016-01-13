(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = io();

socket.on('client_list', function (client_list) {
    _store2.default.dispatch({ type: 'CLIENT', state: { client_list: client_list } });
});

socket.on('chat message', function (msg) {
    _store2.default.dispatch({ type: 'MESSAGE', message: msg });
    // $('#messages').append($('<li>').text(msg));
});

socket.on('nickname changed', function (data) {

    console.log('user changed nickname:' + data.from + ' to ' + data.to);

    if (socket.nickname == data.from) {

        console.log('change nickname to ' + data.to);

        socket.nickname = data.to;
        $('#nickname').text(data.to);
    }
});

socket.on('setup', function (data) {
    console.log('current user:' + data.nickname);
    console.log('current id:' + data.id);
    socket.nickname = data.nickname;
    socket.id = data.id;
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

$(document).on('submit', 'form', function () {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

$(document).on('click', '#nickname', function () {
    console.log('click');
    socket.emit('change to nickname', 'test1');
    return false;
});

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

  console.log('STATE');
  console.log(state);
  switch (action.type) {
    case 'CLIENT':
      return Object.assign({}, state, { client_list: action.state.client_list });
    case 'MESSAGE':
      return Object.assign({}, state, { messages: [].concat(_toConsumableArray(state.messages), [action.message]) });
    default:
      return state;
  }
}

exports.default = (0, _redux.createStore)(clientList);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
