import "../styles/DisplayUsers.css"
import { RiSearchLine } from "react-icons/ri"
import { FiMoreVertical } from "react-icons/fi"
import photo from "../media/profil.jpg"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { signUpRoute, createOrFindConversation } from "../utils/url"

export default function DispayUsers(
  setCurrentChat,
  currentChat,
  setConversationId
) {
  const [contacts, setContacts] = useState([])
  const token = localStorage.getItem("token")
  const currentUserId = localStorage.getItem("userId")

  useEffect(() => {
    axios
      .get(`${signUpRoute}/${currentUserId}`, {
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then(response => {
        setContacts(response.data)
      })
      .catch(() => {
        console.log("une erreur")
      })
  }, [token, currentUserId])

  useEffect(() => {
    axios
      .get(
        `${createOrFindConversation}/${currentUserId}/${currentChat.userId}`,
        {
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      )
      .then(conv => {
        setConversationId(conv.data.conversation._id)
      })
      .catch(err => {
        throw err
      })
  }, [currentChat.userId, currentUserId, setConversationId])

  return (
    <div className="usersPage">
      <div className="searchContainer">
        <RiSearchLine className="search" />
        <input type="text" placeholder="Search" />
        <FiMoreVertical className="more" />
      </div>
      <div className="containerAllUser">
        <h3>Recent</h3>
        <div className="AllUser">
          {contacts.map((contact, index) => (
            <div
              onClick={() =>
                setCurrentChat({
                  userName: contact.userName,
                  userId: contact._id,
                })
              }
              className="everyUser"
              key={index}
            >
              <img src={photo} alt="l'utilisateur" />
              <ul>
                <li className="userName">{contact.userName}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
