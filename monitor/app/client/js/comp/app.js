import React from 'react'
import { Link, IndexLink } from 'react-router'

const ACTIVE = { backgroundColor: '#CCC' }

class App extends React.Component {
    render() {
        return (
          <div className='app'>
            <ul className='nav'>
              <li><IndexLink to="/" activeStyle={ACTIVE}>Main </IndexLink></li>
              <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
              <li><Link to="/flipper" activeStyle={ACTIVE}>Flipper</Link></li>
            </ul>
            {this.props.children}
          </div>
        )
    }
}

export default App
