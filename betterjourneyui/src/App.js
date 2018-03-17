import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Header from './ui/Header';
import Sidebar from './ui/Sidebar';
import NotFound from './ui/NotFound';
import Home from './ui/Home';

import Messenger from './components/messenger/Messenger';
import Journey from './components/journey/Journey';
import Clients from './components/clients/Clients';

import usersData from './data/users.json'
import chatRoomsData from './data/chatrooms.json'
import chatRoomData from './data/chatroom.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      chatRoomData: [],
      chatRoomsData: []
    }
  }

  componentWillMount() {
    this.setState({
      users: usersData['entries'],
      chatRoomData: chatRoomData['entries'],
      chatRoomsData: chatRoomsData['entries'],
    })

    console.log('userdara', usersData['entries'])
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="sidebar" >    
            <Sidebar/>
          </div>
          <div className="content" >    
            <Header/>

            <Switch>
              <Route exact path="/" render={props => 
                <Home {...props} />
                }
              /> 

              <Route exact path="/messaging" render={props => 
                  <Messenger {...props} 
                  users={this.state.users} 
                  chatRoomData={this.state.chatRoomData} 
                  chatRoomsData={this.state.chatRoomsData}
                  />
                }/>  
                
              <Route exact path="/clients" render={props => 
                <Journey {...props} 
                />
              }/>  

              <Route exact path="/journey" render={props => 
                <Clients {...props} 
                />
              }/>  

              <Route component={NotFound}/>
            </Switch>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
