import Menu from './Menu'
import '../styles/Pages.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { signInRoute } from '../utils/url'
// import { Oval } from 'react-loader-spinner'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function Submit(e) {
    e.preventDefault()
    axios
      .post(signInRoute, {
        email,
        password,
      })
      .then(user => {
        const token = user.data.token.split(' ')[1]
        localStorage.setItem('token', token)
        localStorage.setItem('userId', user.data.userId)
        localStorage.setItem('userName', user.data.userName)
        localStorage.setItem('picture', user.data.picture)
        navigate('/accueil')
      })
      .catch(err => console.log(err))
  }
  return (
    <main className="item">
      {/* <Oval
        height="30"
        width="30"
        radius="9"
        color="#8b3eff"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> */}
      <form className="formulaire" onSubmit={Submit}>
        <h2 style={{ textAlign: 'center', color: '#8b3eff' }}>
          Bk Messenger
        </h2>
        <input
          className="champ"
          type="tel"
          placeholder="Email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          className="champ"
          type="password"
          placeholder="Password"
          name="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
        <input className="bouton" type="submit" value="To log in" />
      </form>
      <Menu />
    </main>
  )
}
