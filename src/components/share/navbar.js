import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import logo from './images/logo.png';

export default function NavBar(){
  return(
    <header>
      <div className="header-container">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link >
        <nav>
          <ul>
            <li>
              <NavLink 
                to='/' exact 
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'yellow'
                }}
              > Home 
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/projects' exact 
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'yellow'
                }}
              > Projects 
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/contact' exact 
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'yellow'
                }}
              > Contact 
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}