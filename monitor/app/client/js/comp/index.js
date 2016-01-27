import React from 'react'
import { connect,Provider } from 'react-redux'
import NameList from './namelist'
import socket from '../socket'
import store from '../store'

class Index extends React.Component {
    sendMessage(e){
        e.preventDefault();
        const node = this.refs.input
        const text = node.value.trim()
        socket.emit('chat message', text);
        node.value = ''
        return false;
    }
    Use(m){
        return function(){
            console.log(m)
            socket.emit('use method', m)
        }
    }
    render() {
      const { messages, client_list, user, game } = this.props
          var GAME, P1, P2
          if (game) {
              var my_char,cur_turn
              if (game.p1.id == user.id) {
                  my_char = 'p1'
                  if (game.p1.turn) {
                      cur_turn = true
                  } else {
                      cur_turn = false
                  }
              } else if (game.p2.id == user.id) {
                  my_char = 'p2'
                  if (game.p2.turn) {
                      cur_turn = true
                  } else {
                      cur_turn = false
                  }
              } else {
                  console.log('You are OB')
              }
             P1 = (
                  <div className='player' style={{backgroundColor: my_char=='p1' ? '#33aa33': '' }}>
                  <span className='name'>
                      {game.p1.name}
                  </span>
                  <span className='hp'>
                  HP: {game.p1.hp}
                  </span>
                  <span className='mp'>
                  MP: {game.p1.mp}
                  </span>
                  </div>
                 )
             P2= (
                      <div className='player' style={{backgroundColor: my_char=='p2' ? '33aa33': '' }}>
                      <span className='name'>
                          {game.p2.name}
                      </span>
                      <span className='hp'>
                      HP: {game.p2.hp}
                      </span>
                      <span className='mp'>
                      MP: {game.p2.mp}
                      </span>
                      </div>
                      )
              GAME = (
                      <div className='game'>
                      {my_char=='p2'? P2 : P1 }
                      {my_char=='p2'? P1 : P2 }
                          <div style={{display:cur_turn ? 'block': 'none'}} >
                              <button onClick={this.Use('skill')}>SKILL</button>
                              <button onClick={this.Use('atk')}>ATK</button>
                          </div>
                      </div>
                      )
             }

      return (
        <div>
          <div className="game-status">
              {GAME}
          </div>

          <div className="sidebar">
              <NameList client_list={client_list} cur_user={user}/>
          </div>
          <ul id="messages">
              {messages.map((elem)=>{
                  return <li key={elem.mid}>{elem.name} : {elem.msg}</li>
              })}
          </ul>

          <form className='messages' onSubmit={this.sendMessage.bind(this)}>
              <input type="text" ref='input'/>
              <button>Send</button>
          </form>

        </div>
      )
    }
}

export default Index
