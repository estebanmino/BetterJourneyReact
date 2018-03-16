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
import chatroomsData from './data/chatroomsData.json'
import chatroomData from './data/chatroomData.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users = usersData['entries'],
      chatroomData = chatroomData['entries'],
      chatroomsData = chatroomsData['entries'],
    }
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
                  <Messenger {...props} users={this.users} chatroomData={this.chatroomData} chatroomsData={chatroomsData}
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
