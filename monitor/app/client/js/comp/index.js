import React from 'react'
import { connect,Provider } from 'react-redux'
import NameList from './namelist'
import socket from '../socket'

class Index extends React.Component {
  sendMessage(e){
      e.preventDefault();
      const node = this.refs.input
      const text = node.value.trim()
      socket.emit('chat message', text);
      node.value = ''
      return false;
  }
  render() {
    const { messages, client_list, user } = this.props
    return (
      <div>
        <div className="sidebar">
            <NameList client_list={client_list} cur_user={user}/>
        </div>
        <ul id="messages">
            {messages.map((elem)=>{
                return <li key={elem.mid}>{elem.name} : {elem.msg}</li>
            })}
        </ul>

        <form onSubmit={this.sendMessage.bind(this)}>
            <input type="text" ref='input'/>
            <button>Send</button>
        </form>

      </div>
    )
  }
}

export default Index
