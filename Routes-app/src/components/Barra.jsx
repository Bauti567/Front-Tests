import React from 'react'
import { NavLink } from 'react-router-dom';

function Barra() {
  return (
    <div>
      <ul>
      <li>
          <NavLink  to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/user/:id'>Users</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
      </ul>
    </div>

  )
}

export default Barra;
