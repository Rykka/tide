(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _redux = (typeof window !== "undefined" ? window['Redux'] : typeof global !== "undefined" ? global['Redux'] : null);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var socket = io();

function clientList() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  console.log('STATE');
  console.log(state);
  switch (action.type) {
    case 'GET':
      return state;
    case 'SET':
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.state)]);
    default:
      return state;
  }
}

var store = (0, _redux.createStore)(clientList);

$('form').submit(function () {
  console.log('submit');
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

$(document).on('click', '#nickname', function () {
  console.log('click');
  socket.emit('change to nickname', 'test1');
  return false;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
