import React, { Component } from 'react';
import ChatListItem from './ChatListItem';

class ChatsList extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentWillMount() {
    console.log("chatroomsssss", this.props.chatRooms)
  }
  

  render() {
    return (
      <div className="messenger-component chats-list ">
        <h2>ChatsList</h2>
        {this.props.chatRooms.map((chatRoom, key) => (
          <ChatListItem key={key} chatRoom={chatRoom} changeCurrentChatRoom={this.props.changeCurrentChatRoom}/>
        ))}
      </div>
    );
  }
}

export default ChatsList;
