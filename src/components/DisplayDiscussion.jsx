import "../styles/DisplayDiscussion.css"
import "../styles/DisplayUsers.css"
import Welcome from "./welcome"
import { AiOutlineSend } from "react-icons/ai"
import { useState, useEffect } from "react"
import axios from "axios"
import { addMessageRoute, getMessage } from "../utils/url"
import photo from "../media/profil.jpg"
export default function DisplayDiscussion({ currentChat}) {

  const [messageSended, setMessageSended] = useState({
    emoji:"",
    text:""
  }),
    [messages, setMessages] = useState([]),
    currentUserId = localStorage.getItem("userId"),
    token = localStorage.getItem("token")

  const sendMsg = (e) => {
    e.preventDefault()
        {(messageSended.length < 3) ? alert('message non valide '):
            axios.post(addMessageRoute,
                {
                    message : `${messageSended.text}`,
                    from : currentUserId,
                    to : currentChat.userId
                })
            .then(() => {
                setMessageSended({
                    emoji:"",
                    text :""
                })
                })
            .catch((err) => console.log(err))            
        }
    }
    const from = currentUserId
    const to = currentChat.userId

    useEffect(()=>{
        axios.get(`${getMessage}/${from}/${to}`)
        .then((mes)=>{
            setMessages(mes.data.messages)
        })
        .catch(err =>console.error(err))
    },[token, currentChat])

    console.log(messages ,"les messages reçus par conversation")

    return( currentChat.userId === "" ? <Welcome /> :
        <div className="discussionPage">
            <div className="online">
                <img src={photo}  className alt="" />
                <ul>
                    <li className="userName" >{currentChat.userName}</li>
                    <li className="status">online</li>
                </ul>
                <div></div>
                <div></div>
            </div>

            <div className="allMessages">                
                {   messages.map((message) => (
                        <div className={message.from === currentUserId ? "msgSended own" : "msgSended" }>
                            <div className="parentMsg">
                                <p className="messageText">{message.message}</p>
                            </div>
                            <div className="date">
                                {message.createdAt.split('T')[0]}, 
                                {message.createdAt.split('T')[1].split('.')[0]}
                            </div>
                        </div>
                    ))}
            </div>
          
           <form className="message" onSubmit={sendMsg}>
                <textarea  placeholder="write your message here"
                    onChange={(e)=> setMessageSended({
                    text : e.target.value})} 
                    value={messageSended.text} rows="1" 
                    className="fieldMsg"
                />
                <button type="submit" className="btn">
                    <AiOutlineSend className="send" />
                </button>
           </form>
        </div>
    )
}
