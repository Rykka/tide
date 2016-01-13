import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { connect,Provider } from 'react-redux'

import $ from 'jquery'

import Table from './comp/table'
import App from './comp/app'
import Index from './comp/index'
import About from './comp/about'

import store from './store'
import './socket'

function selectCLIENT(state) {
    return {
        client_list: state.client_list
    }
}

var MYTABLE = connect(selectCLIENT)(Table)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={MYTABLE} />
              <Route path='/i' component={Index}/>
              <Route path="/about" component={About}/>
            </Route>
        </Router>
    </Provider>
), $('#example').get(0))
