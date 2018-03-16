import React, { Component } from 'react';

import Chat from './Chat';
import ChatsList from './ChatsList';
import Profile from './Profile';

class Messenger extends Component {
  render() {
    return (
      <div className="messenger">
        <div className="row">
        <div className="col-md-3">
            <ChatsList />
          </div>
          <div className="col-md-6">
            <Chat />
          </div>

          <div className="col-md-3">
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
