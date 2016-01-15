import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { connect,Provider } from 'react-redux'

import $ from 'jquery'

import App from './comp/app'
import Index from './comp/index'
import About from './comp/about'
import Flipper from './comp/flipper'

import store from './store'
import socket from './socket'

function selectMESSAGE(state) {
    return {
        user: state.user,
        messages: state.messages,
        client_list: state.client_list
    }
}

var MYINDEX = connect(selectMESSAGE)(Index)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={MYINDEX}/>
              <Route path="/about" component={About}/>
              <Route path='/flipper' component={Flipper}/>
            </Route>
        </Router>
    </Provider>
), $('#example').get(0))
