import React, { useState, useEffect, useRef } from "react"
import "../styles/DisplayDiscussion.css"
import "../styles/DisplayUsers.css"
import Welcome from "./welcome"
import { AiOutlineSend } from "react-icons/ai"
import axios from "axios"
import { addMessageRoute, getMessage } from "../utils/url"
import photo from "../media/profil.jpg"
import { io } from "socket.io-client"

export default function DisplayDiscussion({ currentChat, conversationId }) {
  const socket = useRef(io("http://localhost:8080"))
  const [messages, setMessages] = useState([])
  const currentUserId = localStorage.getItem("userId")
  const [room, setRoom] = useState()
  const [messageSended, setMessageSended] = useState({
    emoji: "",
    text: "",
  })

  useEffect(() => {
    if (currentUserId) {
      socket.current.emit("add-user", currentUserId)
    }
  }, [currentUserId])

  const sendMsg = e => {
    e.preventDefault()
    messageSended === null || messageSended === " " || messageSended.length < 0
      ? alert("message non valide ")
      : axios
          .post(addMessageRoute, {
            conversationId,
            message: `${messageSended.text}`,
            from: currentUserId,
            to: currentChat.userId,
          })
          .then(() => {
            socket.current.emit("send-msg", {
              message: `${messageSended.text}`,
              from: currentUserId,
              receiver: currentChat.userId,
            })
            setMessageSended({
              emoji: " ",
              text: " ",
            })
          })
          .catch(() => console.log("erreur"))
  }
  useEffect(() => {
    socket.current.on("msg-received", data => {
      setRoom(data)
    })
  }, [])
  useEffect(() => {
    axios
      .get(`${getMessage}/${conversationId}`)
      .then(mes => {
        setMessages(mes.data)
      })
      .catch(() => console.error("requete echouée"))
    }, [messageSended, conversationId, room])

  return conversationId === "" || null ? (
    <Welcome />
  ) : (
    <div className="discussionPage">
      <div className="online">
        <img src={photo} className alt="" />
        <ul>
          <li className="userName">{currentChat.userName}</li>
          {/* <li className="status">{socketMessage}</li> */}
        </ul>
        <div></div>
        <div></div>
      </div>
      <div className="allMessages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.from === currentUserId ? "msgSended own" : "msgSended"
            }
          >
            <div className="parentMsg">
              <p className="messageText">{message.message}</p>
            </div>
            <div className="date">
              {message.createdAt.split("T")[0]},
              {message.createdAt.split("T")[1].split(".")[0]}
            </div>
          </div>
        ))}
      </div>
      <form className="message" onSubmit={sendMsg}>
        <textarea
          placeholder="write your message here"
          onChange={e => setMessageSended({ text: e.target.value })}
          value={messageSended.text}
          rows="1"
          className="fieldMsg"
        />
        <button type="submit" className="btn">
          <AiOutlineSend className="send" />
        </button>
      </form>
    </div>
  )
}
