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
              <NavLink exact to="/messaging">
              <div className="card sidebar-card">
                  Messaging
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/clients">
                <div className="card sidebar-card">
                  Cients
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/journey">
              <div className="card sidebar-card">
                Journey
              </div>  
              </NavLink>

            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
