(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = (function (_React$Component) {
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
        )
      );
    }
  }]);

  return About;
})(_react2.default.Component);

exports.default = About;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var App = (function (_React$Component) {
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
          'h1',
          null,
          'APP!'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'navigation' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.IndexLink,
              { to: '/', activeStyle: ACTIVE },
              '/ Table'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/about', activeStyle: ACTIVE },
              '/about'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/flipper', activeStyle: ACTIVE },
              '/flipper'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/i', activeStyle: ACTIVE },
              '/I'
            )
          )
        ),
        this.props.children
      );
    }
  }]);

  return App;
})(_react2.default.Component);

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
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var messages = this.props.messages;

      console.log(messages);
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h2",
          null,
          "Index!"
        ),
        _react2.default.createElement(
          "ul",
          { id: "messages" },
          messages.map(function (elem) {
            return _react2.default.createElement(
              "li",
              { key: elem.mid },
              elem.name,
              " : ",
              elem.msg
            );
          })
        ),
        _react2.default.createElement(
          "form",
          { action: "" },
          _react2.default.createElement("input", { id: "m", autoComplete: "off" }),
          _react2.default.createElement(
            "button",
            null,
            "Send"
          )
        ),
        _react2.default.createElement(
          "button",
          { id: "nickname" },
          "NICK"
        )
      );
    }
  }]);

  return Index;
})(_react2.default.Component);

exports.default = Index;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            var client_list = this.props.client_list;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    null,
                    'List'
                ),
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'ID'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'NICKNAME'
                            )
                        ),
                        client_list.map(function (client, index) {
                            return _react2.default.createElement(
                                'tr',
                                { key: client.id },
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    client.id
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    client.nickname
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Table;
})(_react2.default.Component);

exports.default = Table;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactRouter = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);

var _reactRedux = (typeof window !== "undefined" ? window['ReactRedux'] : typeof global !== "undefined" ? global['ReactRedux'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _table = require('./comp/table');

var _table2 = _interopRequireDefault(_table);

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

require('./socket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectCLIENT(state) {
    return {
        client_list: state.client_list
    };
}
function selectMESSAGE(state) {
    return {
        messages: state.messages
    };
}

var MYTABLE = (0, _reactRedux.connect)(selectCLIENT)(_table2.default);
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
            _react2.default.createElement(_reactRouter.IndexRoute, { component: MYTABLE }),
            _react2.default.createElement(_reactRouter.Route, { path: '/i', component: MYINDEX }),
            _react2.default.createElement(_reactRouter.Route, { path: '/flipper', component: _flipper2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about2.default })
        )
    )
), (0, _jquery2.default)('#example').get(0));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./comp/about":1,"./comp/app":2,"./comp/flipper":3,"./comp/index":4,"./comp/table":5,"./socket":7,"./store":8}],7:[function(require,module,exports){
'use strict';

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
},{}]},{},[6]);
