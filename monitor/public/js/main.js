(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'About '
        ),
        'hello world'
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ACTIVE = { backgroundColor: '#CCC' };

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.IndexLink,
              { to: '/', activeStyle: ACTIVE },
              'Main'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/about', activeStyle: ACTIVE },
              'About'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/flipper', activeStyle: ACTIVE },
              'Flipper'
            )
          )
        ),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            flipped: false
        };
    },

    flip: function flip() {
        this.setState({ flipped: !this.state.flipped });
    },

    render: function render() {
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(Flipper, { flipped: this.state.flipped, orientation: "horizontal" }),
            _react2.default.createElement(Flipper, { flipped: this.state.flipped, orientation: "vertical" }),
            _react2.default.createElement(
                "div",
                { className: "button-container" },
                _react2.default.createElement(
                    "button",
                    { onClick: this.flip },
                    "Flip!"
                )
            )
        );
    }
});

var Flipper = _react2.default.createClass({
    displayName: "Flipper",

    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "flipper-container " + this.props.orientation },
            _react2.default.createElement(
                "div",
                { className: "flipper" + (this.props.flipped ? " flipped" : "") },
                _react2.default.createElement(
                    Front,
                    null,
                    "the front!"
                ),
                _react2.default.createElement(
                    Back,
                    null,
                    "the back!"
                )
            )
        );
    }
});
var Front = _react2.default.createClass({
    displayName: "Front",

    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "front tile" },
            this.props.children
        );
    }
});

var Back = _react2.default.createClass({
    displayName: "Back",

    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "back tile" },
            this.props.children
        );
    }
});

exports.default = App;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = (typeof window !== "undefined" ? window['ReactRedux'] : typeof global !== "undefined" ? global['ReactRedux'] : null);

var _namelist = require('./namelist');

var _namelist2 = _interopRequireDefault(_namelist);

var _socket = require('../socket');

var _socket2 = _interopRequireDefault(_socket);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'sendMessage',
        value: function sendMessage(e) {
            e.preventDefault();
            var node = this.refs.input;
            var text = node.value.trim();
            _socket2.default.emit('chat message', text);
            node.value = '';
            return false;
        }
    }, {
        key: 'Use',
        value: function Use(m) {
            return function () {
                console.log(m);
                _socket2.default.emit('use method', m);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var messages = _props.messages;
            var client_list = _props.client_list;
            var user = _props.user;
            var game = _props.game;

            var GAME, P1, P2;
            if (game) {
                var my_char, cur_turn;
                if (game.p1.id == user.id) {
                    my_char = 'p1';
                    if (game.p1.turn) {
                        cur_turn = true;
                    } else {
                        cur_turn = false;
                    }
                } else if (game.p2.id == user.id) {
                    my_char = 'p2';
                    if (game.p2.turn) {
                        cur_turn = true;
                    } else {
                        cur_turn = false;
                    }
                } else {
                    console.log('You are OB');
                }
                P1 = _react2.default.createElement(
                    'div',
                    { className: 'player', style: { backgroundColor: my_char == 'p1' ? '#33aa33' : '' } },
                    _react2.default.createElement(
                        'span',
                        { className: 'name' },
                        game.p1.name
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'hp' },
                        'HP: ',
                        game.p1.hp
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'mp' },
                        'MP: ',
                        game.p1.mp
                    )
                );
                P2 = _react2.default.createElement(
                    'div',
                    { className: 'player', style: { backgroundColor: my_char == 'p2' ? '33aa33' : '' } },
                    _react2.default.createElement(
                        'span',
                        { className: 'name' },
                        game.p2.name
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'hp' },
                        'HP: ',
                        game.p2.hp
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'mp' },
                        'MP: ',
                        game.p2.mp
                    )
                );
                GAME = _react2.default.createElement(
                    'div',
                    { className: 'game' },
                    my_char == 'p2' ? P2 : P1,
                    my_char == 'p2' ? P1 : P2,
                    _react2.default.createElement(
                        'div',
                        { style: { display: cur_turn ? 'block' : 'none' } },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.Use('skill') },
                            'SKILL'
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.Use('atk') },
                            'ATK'
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'game-status' },
                    GAME
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sidebar' },
                    _react2.default.createElement(_namelist2.default, { client_list: client_list, cur_user: user })
                ),
                _react2.default.createElement(
                    'ul',
                    { id: 'messages' },
                    messages.map(function (elem) {
                        return _react2.default.createElement(
                            'li',
                            { key: elem.mid },
                            elem.name,
                            ' : ',
                            elem.msg
                        );
                    })
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.sendMessage.bind(this) },
                    _react2.default.createElement('input', { type: 'text', ref: 'input' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        'Send'
                    )
                )
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../socket":7,"../store":8,"./namelist":5}],5:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _socket = require('../socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(Object.prototype, 'map', {
    value: function value(f, ctx) {
        ctx = ctx || this;
        var self = this,
            result = [];
        Object.keys(self).forEach(function (k) {
            result.push(f.call(ctx, self[k], k, self));
        });
        return result;
    }
});

var NameList = function (_React$Component) {
    _inherits(NameList, _React$Component);

    function NameList() {
        _classCallCheck(this, NameList);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NameList).apply(this, arguments));
    }

    _createClass(NameList, [{
        key: 'changeName',
        value: function changeName() {
            var name = prompt('Please Input Your Name');
            if (name) {
                _socket2.default.emit('change to name', name);
            } else {
                alert('You need a valid name');
            }
        }
    }, {
        key: 'refresh',
        value: function refresh(e) {
            e.preventDefault();
            console.log('get list');
            _socket2.default.emit('get client list');
            return false;
        }
    }, {
        key: 'inviteGame',
        value: function inviteGame(from, to) {
            return function () {
                _socket2.default.emit('invite game', { from: from, to: to });
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var client_list = _props.client_list;
            var cur_user = _props.cur_user;

            return _react2.default.createElement(
                'div',
                { className: 'namelist' },
                _react2.default.createElement(
                    'div',
                    { className: 'btn-nav' },
                    _react2.default.createElement(
                        'button',
                        { id: 'name', onClick: this.changeName },
                        cur_user ? cur_user.name : 'NICK'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.refresh },
                        _react2.default.createElement('i', { className: 'fa fa-refresh' })
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    client_list.map(function (client, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: client.id, style: cur_user.id == client.id ? { display: 'none' } : { background: '#99a' }, onClick: _this2.inviteGame({ id: cur_user.id, name: cur_user.name }, { id: client.id, name: client.name }) },
                            _react2.default.createElement(
                                'span',
                                { className: 'user', id: client.id },
                                client.name
                            )
                        );
                    })
                )
            );
        }
    }]);

    return NameList;
}(_react2.default.Component);

exports.default = NameList;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../socket":7}],6:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactRouter = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);

var _reactRedux = (typeof window !== "undefined" ? window['ReactRedux'] : typeof global !== "undefined" ? global['ReactRedux'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _app = require('./comp/app');

var _app2 = _interopRequireDefault(_app);

var _index = require('./comp/index');

var _index2 = _interopRequireDefault(_index);

var _about = require('./comp/about');

var _about2 = _interopRequireDefault(_about);

var _flipper = require('./comp/flipper');

var _flipper2 = _interopRequireDefault(_flipper);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectMESSAGE(state) {
    return {
        user: state.user,
        game: state.game,
        messages: state.messages,
        client_list: state.client_list
    };
}

var MYINDEX = (0, _reactRedux.connect)(selectMESSAGE)(_index2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _app2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: MYINDEX }),
            _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/flipper', component: _flipper2.default })
        )
    )
), (0, _jquery2.default)('#example').get(0));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./comp/about":1,"./comp/app":2,"./comp/flipper":3,"./comp/index":4,"./socket":7,"./store":8}],7:[function(require,module,exports){
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

},{"./store":8}],8:[function(require,module,exports){
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
},{}]},{},[6]);
