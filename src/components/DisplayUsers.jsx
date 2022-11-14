import "../styles/DisplayUsers.css"
import { RiSearchLine } from "react-icons/ri"
import { FiMoreVertical } from "react-icons/fi"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { signUpRoute, createOrFindConversation } from "../utils/url"

export default function DispayUsers({
  setCurrentChat,
  currentChat,
  setConversationId,
}) {
  const [contacts, setContacts] = useState([])
  const token = localStorage.getItem("token")
  const currentUserId = localStorage.getItem("userId")

  useEffect(() => {
    axios
      .get(`${signUpRoute}/${currentUserId}`)
      .then(response => {
        setContacts(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [token, currentUserId])

  useEffect(() => {
    axios
      .get(`${createOrFindConversation}/${currentUserId}/${currentChat.userId}`)
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
                  picture: contact.picture
                })
              }
              className="everyUser"
              key={index}
            >
              <img src={contact.picture} alt="l'utilisateur" />
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
