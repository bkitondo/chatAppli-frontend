import Menu from "./Menu"
import "../styles/Pages.css"
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { signUpRoute, cloudinary } from "../utils/url"
import defaultProfil from "../media/defaultProfil.png"
import { AiOutlinePlus } from "react-icons/ai"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirPassword] = useState("")
  const [userImage, setUserImage] = useState(defaultProfil)
  const [imageDefault, setImageDefault] = useState(defaultProfil)
  console.log("imageDefault", imageDefault);
  const navigate = useNavigate()

  const formData = new FormData()
  formData.append("file", userImage)
  formData.append("upload_preset", "suc61h3y")

  const Submit = e => {
    e.preventDefault()
    if (password === confirmPassword) {
      axios({
        method: "post",
        url:cloudinary,
        data: formData,
      })
      .then(image => {
        console.log(image);
        const picture = image.data.secure_url
        axios
          .post(signUpRoute, {
            userName: name,
            picture,
            email,
            password,
          })
          .then(() => {
            setName(""),
            setEmail(""),
            setPassword(""),
              setConfirPassword(""),
              setImageDefault(defaultProfil)
            })
            .catch(err => console.log(err))
            navigate("/")
      })
      .catch(err => {throw err})
    } 
    else {
        alert("mot de passe different")
    }}
  return (
    <main className="item">
      <form className="formulaire" onSubmit={Submit}>
        <p style={{ textAlign: "center", color: "#8b3eff" }}>Bk Messenger</p>
        <div className="profil-pic">
          <img src={imageDefault} className="defaultProfil" alt="" />
          <AiOutlinePlus className="add-picture-icon"/>
            <input
              type="file"
              className="add-picture"
              accept="image/png, image/jpeg, image/jpg"
              name="uploadImage"
              id="uploadImage"
              onChange={(e) =>{
                setUserImage(e.target.files[0])
                setImageDefault(URL.createObjectURL(e.target.files[0]))
              }}
            />
        </div>
        <input
          className="champ"
          type="text"
          placeholder="Nom"
          onChange={e => {
            setName(e.target.value)
          }}
          value={name}
        />
        <input
          className="champ"
          type="tel"
          placeholder="Email"
          onChange={e => {
            setEmail(e.target.value)
          }}
          value={email}
        />
        <input
          className="champ"
          type="password"
          placeholder="Mot de passe"
          onChange={e => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <input
          className="champ"
          type="password"
          placeholder="Confirmez mot de passe"
          onChange={e => {
            setConfirPassword(e.target.value)
          }}
          value={confirmPassword}
        />
        <input className="bouton" type="submit" value="inscription" />
      </form>
      <Menu />
    </main>
  )
}
