import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/Projects'>Projects</Link>
      <Link to='/ContactMe'>Contact Me</Link>
    </div>
  )
}

export default NavBar