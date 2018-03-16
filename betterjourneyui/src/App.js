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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header/>
      <Sidebar/>
          <Switch>
            <Route exact path="/" render={props => 
              <Home {...props} />
            }
          /> 

          <Route exact path="/messaging" render={props => 
              <Messenger {...props}
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
      </BrowserRouter>
    );
  }
}

export default App;
