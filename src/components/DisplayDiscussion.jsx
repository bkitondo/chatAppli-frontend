import "../styles/DisplayDiscussion.css"
import '../styles/DisplayUsers.css'
import {AiOutlineSend} from 'react-icons/ai'
import { useState } from "react"

export default function DisplayDiscussion({recentUser}){
    const [messageSended, setMessageSended] = useState("")
    const Message = ["salutt", "bonjour"]
    
    const Msg = (e)=>{
            e.preventDefault()
            // Message.push(messageSended)
            // console.log("Hello");
            console.log(`message ${messageSended}`);
    }

    return(
        <div className="discussionPage">
           <ul   className="person">
                <li className="userName" >{recentUser.userName}</li>
                <li className="recentMessage">{recentUser.message}</li>
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
           <form className="message" onSubmit={e => Msg(e)}>
                <textarea onChange={(e)=> setMessageSended(e.target.value)} value={messageSended} rows="1" className="msg"/>
                <button type="submit" className="btn">
                    <AiOutlineSend className="send" />
                </button>
           </form>
        </div>
    )
}
