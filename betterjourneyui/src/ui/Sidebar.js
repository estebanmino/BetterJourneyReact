import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <Nav >
            <NavItem>
              <NavLink exact to="/messaging">Messaging</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/clients">Cients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/journey">Journey</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
