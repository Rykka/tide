import React from 'react'
import socket from '../socket'

Object.defineProperty(Object.prototype, 'map', {
    value: function(f, ctx) {
        ctx = ctx || this;
        var self = this, result = [];
        Object.keys(self).forEach(function(k) {
            result.push(f.call(ctx, self[k], k, self)); 
        });
        return result;
    }
});
class NameList extends React.Component {
    changeName () {
        var name = prompt('Please Input Your Name')
        if (name) {
            socket.emit('change to name', name);
        } else {
            alert('You need a valid name');
        }
    }
    refresh(e) {
        e.preventDefault()
        console.log('get list')
        socket.emit('get client list')
        return false
    }
    inviteGame(from, to){
        return function(){
            socket.emit('invite game', {from:from,to:to})
        }
    }
    render() {
        const { client_list,cur_user } = this.props
        return (
            <div className='namelist'>
                <div className='btn-nav'>
                <button id='name' onClick={this.changeName}>{cur_user ? cur_user.name : 'NICK'}</button>
                <button onClick={this.refresh}><i className='fa fa-refresh'></i></button>
                </div>
                <ul>
                    { client_list.map((client, index) =>
                        <li key={client.id} style={cur_user.id==client.id ? {display:'none'}:{background:'#99a'}} onClick={this.inviteGame({id:cur_user.id, name:cur_user.name}, {id:client.id,name:client.name})}>
                            <span className="user" id={client.id} >{client.name}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default NameList
