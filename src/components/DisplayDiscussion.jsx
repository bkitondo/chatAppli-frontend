import "../styles/DisplayDiscussion.css"
import '../styles/DisplayUsers.css'
import {AiOutlineSend} from 'react-icons/ai'
import { useState } from "react"
import axios from "axios"
import { addMessageRoute} from '../utils/url'

export default function DisplayDiscussion({currentChat}){
    const [messageSended, setMessageSended] = useState("")
    const Message = ["salutt", "bonjour"]
    const currentUserId = localStorage.getItem("userId") 
    
    const sendMsg = (e)=>{
            e.preventDefault()
            axios.post(addMessageRoute,{
                    message : messageSended,
                    from : currentUserId,
                    to : currentChat.userId
            })
            .then(() => {
                setMessageSended("")
                console.log("message envoyé avec succes");})
            .catch((err) => console.log(err));
            // Message.push(messageSended)
            // console.log("Hello");
            console.log(`message ${messageSended}`);
    }

    return(
        <div className="discussionPage">
           <ul   className="person">
                <li className="userName" >{currentChat.userName}</li>
                <li className="recentMessage">{currentChat.message}</li>
           </ul>
           <div className="allMessages">
            {Message.map((message)=>(
                <ul>
                    <li>
                        {/* {message} */}
                    </li>
                </ul>
            ))}
           </div>
           <form className="message" onSubmit={sendMsg}>
                <textarea onChange={(e)=> setMessageSended(e.target.value)} value={messageSended} rows="1" className="msg"/>
                <button type="submit" className="btn">
                    <AiOutlineSend className="send" />
                </button>
           </form>
        </div>
    )
}
