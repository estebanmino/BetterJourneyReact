import React, { Component } from 'react';
import image from '../../person.png';

class ChatsListItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentChatRoomId: 0
        }
        this.handleChangeCurrentChatRoom = this.handleChangeCurrentChatRoom.bind(this)
    }

    componentWillMount() {
        this.setState({
            currentChatRoomId: this.props.chatRoom['chatroomId']
        })
    }

    handleChangeCurrentChatRoom(event) {
        event.preventDefault();
        this.props.changeCurrentChatRoom(this.state.currentChatRoomId);
    }


    render() {
        return (
        <div className="card chat-list-item" onClick={this.handleChangeCurrentChatRoom}>
            <div className= "row">
                <div className="col-md-3">
                    <img src={image}/>
                </div>
                <div className="col-md-8">
                    <h4>{this.props.chatRoom['chatroomId']}</h4>
                </div>
            </div>
        </div>
        );
    }
}

export default ChatsListItem;
