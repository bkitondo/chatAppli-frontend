import '../styles/DisplayDiscussion.css'
import '../styles/DisplayUsers.css'
import Welcome from './welcome'
import { AiOutlineSend } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { addMessageRoute, getMessage } from '../utils/url'
import photo from '../media/profil.jpg'

export default function DisplayDiscussion ({ currentChat }) {
    const [messageSended, setMessageSended] = useState(""),
          [messages, setMessages] = useState([]),
          currentUserId = localStorage.getItem("userId"),
          token = localStorage.getItem("token")
    
    const sendMsg = (e)=>{
        e.preventDefault()
        {(messageSended.length < 3) ? alert('message non valide '):
            axios.post(addMessageRoute,{
                    message : messageSended,
                    from : currentUserId,
                    to : currentChat.userId
            })
            .then(() => {
                setMessageSended("")
                console.log("message envoyé avec succes");})
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
            </div>
          
           <div className="allMessages">
            <ul className='containerMessage'>
                {messages ?
                    ( messages.length > 0 ?
                        messages.map((message) => 
                        <li className={message.from === from ? 'msgSended' 
                        : 'msgReceved'}>{message.message}</li>)
                    :null)
                :null
                }
            </ul>             
           </div>
           <form className="message" onSubmit={sendMsg}>
                <textarea onChange={(e)=> setMessageSended(e.target.value)} 
                          value={messageSended} rows="1" 
                          className="fieldMsg"
                />
                <button type="submit" className="btn">
                    <AiOutlineSend className="send" />
                </button>
           </form>
        </div>
    )
}
