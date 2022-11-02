import React, { useState, useEffect } from "react"
import "../styles/DisplayDiscussion.css"
import "../styles/DisplayUsers.css"
import Welcome from "./welcome"
import { AiOutlineSend } from "react-icons/ai"
import axios from "axios"
import { addMessageRoute, getMessage } from "../utils/url"
import photo from "../media/profil.jpg"

// import io from "socket.io-client"
// const socket = io.connect("http://localhost:8080")
// const [room, setRoom] = useState(" ")

export default function DisplayDiscussion(currentChat, conversationId) {
  // console.log(`curent ${currentChat.userId}  ${conversationId}`)
  // setRoom = conversationId
  const [messageSended, setMessageSended] = useState({
    emoji: "",
    text: "",
  })
  const [messages, setMessages] = useState([])
  // const [socketMessage, setSocketMessage] = useState(" ")
  const currentUserId = localStorage.getItem("userId")

  const sendMsg = e => {
    e.preventDefault()
    // socket.emit("send_message", messageSended, room)
    messageSended.length < 3
      ? alert("message non valide ")
      : axios
          .post(addMessageRoute, {
            conversationId,
            message: `${messageSended.text}`,
            from: currentUserId,
            to: currentChat.userId,
          })
          .then(() => {
            setMessageSended({
              emoji: " ",
              text: " ",
            })
          })
          .catch(err => console.log(err))
  }
  // const from = currentUserId
  // const to = currentChat.userId

  // useEffect(() => {
  //   socket.on("receive_message", data => {
  //     // alert(`receive_message ${data.text}`)
  //     setSocketMessage(data.text)
  //   })
  // }, [socket])

  // const JoinRoom = () => {
  //   if(room !== "") {
  //     socket.emit("join_room", room)
  //   }
  // }

  useEffect(() => {
    // axios.get(`${getMessage}/${from}/${to}`)
    axios
      .get(`${getMessage}/${conversationId}`)
      .then(mes => {
        setMessages(mes.data)
        console.log(mes.data)
      })
      .catch(err => console.error(err))
  }, [conversationId, messageSended])

  return currentChat.userId === "" ? (
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
