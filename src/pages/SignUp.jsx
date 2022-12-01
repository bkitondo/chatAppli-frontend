import React from 'react'
import login from '../media/login.jpg'
import '../styles/Pages.css'
import SignUp from '../components/Sign_up'

const Inscription = () => {
  return (
    <div className="loginPage">
      <div className="item">
        <img className="imageLogin" src={login} alt="" />
      </div>
      <SignUp />
    </div>
  )
}

export default Inscription
