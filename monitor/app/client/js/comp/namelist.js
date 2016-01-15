import React from 'react'
import socket from '../socket'

class NameList extends React.Component {
    changeName () {
        var name = prompt('Please Input Your Name')
        if (name) {
            socket.emit('change to nickname', name);
        } else {
            alert('You need a valid name');
        }
    }
    render() {
        const { client_list,cur_user } = this.props
        return (
            <div className='namelist'>
                <ul>
                    {client_list.map((client, index) =>
                        <li key={client.id}>
                            <span className="user" id={client.id} style={cur_user.id==client.id ? {background:'#c77'}:{background:'#99a'}}>{client.nickname}</span>
                        </li>
                    )}
                </ul>
                <button id='nickname' onClick={this.changeName}>{cur_user ? cur_user.name : 'NICK'}</button>
                <button >REFRESH</button>
            </div>
        )
    }
}

export default NameList
