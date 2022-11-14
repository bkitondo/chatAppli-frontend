import React from "react"
import "../styles/user.css"
// import profil from "../media/profil.jpg"
import { AiFillMessage } from "react-icons/ai"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

export default function User() {
  const nav = useNavigate()
  const profil = localStorage.getItem("picture")

  function Logout() {
    localStorage.clear()
    nav("/")
  }
  return (
    <div className="userPage">
      <img className="profil" src={profil} alt="profil" />
      <div className="divPrincipal">
        <div className="containerMsg">
          <AiFillMessage className="msgCircle" />
        </div>
        <div className="barjaune"></div>
      </div>
      <button className="logout" onClick={Logout}>
        <RiLogoutBoxRLine />
      </button>
    </div>
  )
}
