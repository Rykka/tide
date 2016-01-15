import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { connect,Provider } from 'react-redux'

import $ from 'jquery'

import Table from './comp/table'
import App from './comp/app'
import Index from './comp/index'
import About from './comp/about'
import Flipper from './comp/flipper'

import store from './store'
import './socket'

function selectCLIENT(state) {
    return {
        client_list: state.client_list
    }
}
function selectMESSAGE(state) {
    return {
        messages: state.messages
    }
}


var MYTABLE = connect(selectCLIENT)(Table)
var MYINDEX = connect(selectMESSAGE)(Index)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={MYTABLE} />
              <Route path='/i' component={MYINDEX}/>
              <Route path='/flipper' component={Flipper}/>
              <Route path="/about" component={About}/>
            </Route>
        </Router>
    </Provider>
), $('#example').get(0))
