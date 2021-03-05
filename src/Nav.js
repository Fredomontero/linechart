import React from 'react';
import { Link } from 'react-router-dom'

export const Nav = () => {

  const navStyle = {
    color: 'white',
  };

  return(
    <nav>
      <Link style={navStyle} to="/" ><h3>Logo</h3></Link>
      <ul>
        <Link style={navStyle} to="/about" ><li>About</li></Link>
        <Link style={navStyle} to="/shop" ><li>Shop</li></Link>
      </ul>
    </nav>
  )
};