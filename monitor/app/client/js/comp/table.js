import React from 'react'

class Table extends React.Component {
    render() {
        const { client_list } = this.props
        return (
            <div>
            <button >List</button>
            <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>NICKNAME</th>
                </tr>
                {client_list.map((client, index) =>
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.nickname}</td>
                    </tr>
                )}
            </tbody>
            </table>
            </div>
        )
    }
}

export default Table
