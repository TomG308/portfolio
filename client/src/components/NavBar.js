import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='title'><p>Cloudy Night Velfa</p></div>
      <div className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/ContactMe'>Contact Me</Link>
      </div>
    </div>
  )
}

export default NavBar