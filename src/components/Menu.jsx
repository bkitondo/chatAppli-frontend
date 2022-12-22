import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'

const Menu = () => {
  return (
    <nav>
      <Link className="link" to="/inscription">
        Create an account
      </Link>
    </nav>
  )
}
export default Menu
