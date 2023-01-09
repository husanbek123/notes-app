
import React from 'react'
import { Link } from 'react-router-dom'
import Settings_Menu from './Settings-Menu/Settings-Menu'


export default function Navbar(props) {
  return (
    <nav>
      <h1>{props.user.username}</h1>  
      <ul>
        <li key="Home">
          <Link to="/">Home</Link>
        </li>
        <li key="registration">
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <div id='navbar_right-part'>
        <button>Buy</button>
        <Settings_Menu />
      </div>
    </nav>
  )
}
