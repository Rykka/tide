import { createStore } from 'redux'

function clientList(state = {client_list:[],messages:[]}, action) {
  console.log('STATE')
  console.log(state)
  switch (action.type) {
  case 'CLIENT':
    return Object.assign({}, state, {client_list: action.state.client_list})
  case 'MESSAGE':
    return Object.assign({}, state, {messages: [...state.messages, action.message]})
  case 'USER':
      console.log('ACTION')
      console.log(action.user)
    return Object.assign({}, state, {user: action.user})
  default:
    return state
  }
}

export default createStore(clientList)
