import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo_blue.png'

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="macs logo" style={{ width: 'auto' }} />
          </figure>
        </Link>
    </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
