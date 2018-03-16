import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <Nav >
            <NavLink exact to="/messaging">Messaging</NavLink>
            <NavLink exact to="/clients">Cients</NavLink>
            <NavLink exact to="/journey">Journey</NavLink>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
