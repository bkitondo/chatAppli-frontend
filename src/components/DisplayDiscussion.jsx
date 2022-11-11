import React, { useState, useEffect, useRef } from "react"
import "../styles/DisplayDiscussion.css"
import "../styles/DisplayUsers.css"
import Welcome from "./welcome"
import { AiOutlineSend, AiOutlineCamera } from "react-icons/ai"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { addMessageRoute, getMessage, cloudinary } from "../utils/url"
import axios from "axios"
// import Picker from "emoji-picker-react"
import { io } from "socket.io-client"

export default function DisplayDiscussion({ currentChat, conversationId }) {
  const socket = useRef(io("http://localhost:8080"))
  const [messages, setMessages] = useState([])
  const currentUserId = localStorage.getItem("userId")
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [room, setRoom] = useState()
  const [messageSended, setMessageSended] = useState({
    emoji: "",
    text: "",
    media: "",
  })
  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", "suc61h3y")

  // console.log(Picker, "picker ");
  useEffect(() => {
    if (currentUserId) {
      socket.current.emit("add-user", currentUserId)
      // setStatus("true")
    }
  }, [currentUserId])

  const sendMsg = e => {
    e.preventDefault()

     if (file || messageSended.text.length > 1)
     { 
      if(file) {
        console.log("if");
        axios({
          method: "post",
          url:cloudinary,
          data: formData,
        })
        .then(image =>{
          setImage(image.data.secure_url)
          test = image.data.secure_url
        })
        .catch(err => {throw err})
      }
      axios
        .post(addMessageRoute, {
            conversationId,
            message: messageSended.text,
            media : test,
            from: currentUserId,
            to: currentChat.userId,
          })
          .then(() => {
            console.log("file in socket", file, "image in socket", image);
            socket.current.emit("send-msg", {
              message: `${messageSended.text}`,
              media : test,
              from: currentUserId,
              receiver: currentChat.userId,
            })
            setMessageSended({
              emoji: "",
              text: "",
              media:"",
            })
            setFile(null)
          })
          .catch(err => console.log(err))
      }
      else {alert("message non valide ")} 
 
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
      .catch(err => console.error(err))
  }, [messageSended, conversationId, room])

  console.log("mesage", messages);

  return conversationId === "" || null ? (
    <Welcome />
  ) : (
    <div className="discussionPage">
      <div className="online">
        <img src={currentChat.picture} className alt="" />
        <ul>
          <li className="userName">{currentChat.userName}</li>
          <li className="status">{`online`}</li>
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
            <img className="messageMedia" src={message.media} alt="" />
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
        <div className="joinFile">
          <MdOutlineEmojiEmotions  className="emoji"/>
          <div>
            <input
              type="file"
              className="selectFile"
              accept="image/png, image/jpeg, image/jpg"
              name="sendImage"
              id="sendImage"
              onChange={e => setFile(e.target.files[0])}
            />
            <AiOutlineCamera  className="camera"/>
          </div>
        </div>
        <button type="submit" className="btn">
          <AiOutlineSend className="send" />
        </button>
      </form>
    </div>
  )
}
