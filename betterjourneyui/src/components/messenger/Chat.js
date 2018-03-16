import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Chat extends Component {
  constructor(props) {
    super(props),
    this.state = { 

    }
  }

  handleChange() {

  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="messenger-component chat">
        <h2>Chat</h2>
        <div className="messages-feed" >

        </div>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" className="btn btn-primary" value="Send" />
        </form>
        </div>
      </div>
    );
  }
}

export default Chat;
