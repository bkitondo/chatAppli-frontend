import React from 'react'
import login from '../media/login.jpg'
import '../styles/Pages.css'
import SignIn from '../components/Sign_in'

const Connexion = () => {
  return (
    <div className="loginPage">
      <div className="item">
        <img className="imageLogin" src={login} alt="" />
      </div>
      <SignIn />
    </div>
  )
}
export default Connexion
