(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    case 'USER':
      console.log('ACTION');
      console.log(action.user);
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
}

exports.default = (0, _redux.createStore)(clientList);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
