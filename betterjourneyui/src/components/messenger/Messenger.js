import React, { Component } from 'react';

import Chat from './Chat';
import ChatsList from './ChatsList';
import Profile from './Profile';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentChatRoom: 0
    }

    this.changeCurrentChatRoom = this.changeCurrentChatRoom.bind(this);
  }

  componentWillMount() {
    this.setState({
      chatRoomsData: this.props.chatRoomsData,
      chatRoomData: this.props.chatRoomData,
      usersData: this.props.usersData,
    })

    console.log(this.props.chatRoomData);
  }

  changeCurrentChatRoom(id) {
    this.setState({
      currentChatRoom: id
    })
    console.log("changing to ", id)
  }
  

  render() {
    return (
      <div className="messenger">
        <div className="row">
        <div className="col-md-3">
            <ChatsList chatRooms={this.props.chatRoomsData} changeCurrentChatRoom={this.changeCurrentChatRoom} />
          </div>
          <div className="col-md-6">
            <Chat chat={this.state.currentChatRoom}/>
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
