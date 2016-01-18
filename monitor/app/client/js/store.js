import { createStore } from 'redux'

function clientList(state = {client_list:[],messages:[]}, action) {
  switch (action.type) {
  case 'CLIENT':
    return Object.assign({}, state, {client_list: action.state.client_list})
  case 'MESSAGE':
    return Object.assign({}, state, {messages: [...state.messages, action.message]})
  case 'USER':
    return Object.assign({}, state, {user: action.user})
  case 'GAME':
    return Object.assign({}, state, {game: action.game})
  default:
    return state
  }
}

export default createStore(clientList)
