import React from 'react'

class Index extends React.Component {
  render() {
    const { messages } = this.props
    console.log(messages)
    return (
      <div>
        <h2>Index!</h2>
        <ul id="messages">
            {messages.map((elem)=>{
                return <li key={elem.mid}>{elem.name} : {elem.msg}</li>
            })}
        </ul>

        <form action="">
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>

        <button id='nickname' >NICK</button>

      </div>
    )
  }
}

export default Index
