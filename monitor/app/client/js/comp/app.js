import React from 'react'
import { Link, IndexLink } from 'react-router'

const ACTIVE = { backgroundColor: '#CCC' }

class App extends React.Component {
    render() {
        return (
          <div className='app'>
            <h1>APP!</h1>
            <ul className='navigation'>
              <li><IndexLink to="/" activeStyle={ACTIVE}>/ Table</IndexLink></li>
              <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
              <li><Link to="/flipper" activeStyle={ACTIVE}>/flipper</Link></li>
              <li><Link to="/i" activeStyle={ACTIVE}>/I</Link></li>
            </ul>
            {this.props.children}
          </div>
        )
    }
}

export default App
