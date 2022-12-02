import '../styles/Pages.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { signUpRoute, cloudinary, signInRoute } from '../utils/url'
import defaultProfil from '../media/defaultProfil.png'
import { AiOutlinePlus } from 'react-icons/ai'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirPassword] = useState('')
  const [userImage, setUserImage] = useState(defaultProfil)
  const [imageDefault, setImageDefault] = useState(defaultProfil)
  const navigate = useNavigate()

  const formData = new FormData()
  formData.append('file', userImage)
  formData.append('upload_preset', 'suc61h3y')

  const Submit = async e => {
    e.preventDefault()
    if (password === confirmPassword) {
      await axios({
        method: 'post',
        url: cloudinary,
        data: formData,
      })
        .then(image => {
          console.log(image)
          const picture = image.data.secure_url
          axios
            .post(signUpRoute, {
              userName: name,
              picture,
              email,
              password,
            })
            .then(() => {
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
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
          navigate('/accueil')
        })
        .catch(err => {
          throw err
        })
    } else {
      alert('mot de passe different')
    }
  }
  return (
    <main className="item">
      <form className="formulaire" onSubmit={Submit}>
        <div className="profil-pic">
          <img src={imageDefault} className="defaultProfil" alt="" />
          <AiOutlinePlus className="add-picture-icon" />
          <input
            type="file"
            className="add-picture"
            accept="image/png, image/jpeg, image/jpg"
            name="uploadImage"
            id="uploadImage"
            onChange={e => {
              setUserImage(e.target.files[0])
              setImageDefault(URL.createObjectURL(e.target.files[0]))
            }}
          />
        </div>
        <input
          className="champ"
          type="text"
          required
          placeholder="Nom"
          onChange={e => {
            setName(e.target.value)
          }}
          value={name}
        />
        <input
          className="champ"
          type="tel"
          required
          placeholder="Email"
          onChange={e => {
            setEmail(e.target.value)
          }}
          value={email}
        />
        <input
          className="champ"
          type="password"
          required
          placeholder="Mot de passe"
          onChange={e => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <input
          className="champ"
          type="password"
          required
          placeholder="Confirmez mot de passe"
          onChange={e => {
            setConfirPassword(e.target.value)
          }}
          value={confirmPassword}
        />
        <input className="bouton" type="submit" value="Register" />
      </form>
    </main>
  )
}
