import "../styles/DisplayDiscussion.css"
import '../styles/DisplayUsers.css'
import Welcome from "./welcome"
import {AiOutlineSend} from 'react-icons/ai'
import { useState,useEffect } from "react"
import axios from "axios"
import { addMessageRoute, getMessage} from '../utils/url'

export default function DisplayDiscussion({currentChat}){
    const [messageSended, setMessageSended] = useState(""),
          [messages, setMessages] = useState([]),
          currentUserId = localStorage.getItem("userId"),
          token = localStorage.getItem("token")
        //   scrollRef = useRef 


        //   useEffect(() => {

        //     const fetchData = async () => {
        //       if(currentChat){
        //         const response = await axios.get(getAllMessagesRoute, {
        //         //   from: currentUserId,
        //         //   to: currentChat.userId,
        //         });
        //         console.log(`okokokoksshqkhd ${response.data}`);
        //         setMessages(response.data);
        //       }
        //     }
        //     fetchData();
        //   }, [token]);
    
    const sendMsg = (e)=>{
        e.preventDefault()
        {(messageSended.length < 3) ? alert('message non valide'):
            axios.post(addMessageRoute,{
                    message : messageSended,
                    from : currentUserId,
                    to : currentChat.userId
            })
            .then(() => {
                setMessageSended("")
                console.log("message envoyé avec succes");})
            .catch((err) => console.log(err))
           
            // const Msgs = [...messages]
            // Msgs.push({
            //     fromSelf : true,
            //     message : messageSended
            // })
            
        }

            // console.log(" verifions juste",messages[0]);
    }
    useEffect(()=>{
        axios.get(`${getMessage}/${currentUserId}`)
        .then((mes)=>{
            setMessages(mes.data)
            // console.log(mes.data ,"les messages  reçus")
        })
        .catch(err =>console.error(err))
    },[token])

// const [us ,setUs] = useState([])

    console.log(messages ,"les messages caveeeee  reçus")
    // messages.map((send)=>( 
    //     console.log(send.users, 'users ')  
    // ))
    const currentChatUserId = currentChat.userId
    const conversation = { currentUserId, currentChatUserId}
    console.log(`voici le user recuperer ${conversation.currentChatUserId}`);
    


    

    return( currentChat.userId === "" ? <Welcome /> :
        <div className="discussionPage">
           <ul   className="person">
                <li className="userName" >{currentChat.userName}</li>
                <li className="recentMessage">{currentChat.message}</li>
           </ul>
           <div className="allMessages">
            {messages.map((message)=>(
                    <ul>
                    <li  className="msg">
                        {message.message}
                    </li>
                    <li>{message.createdAt.split("T")[0]} {message.createdAt.split("T")[1].split('.')[0]}</li>
                </ul>
            ))}
           </div>
           <form className="message" onSubmit={sendMsg}>
                <textarea onChange={(e)=> setMessageSended(e.target.value)} value={messageSended} rows="1" className="fieldMsg"/>
                <button type="submit" className="btn">
                    <AiOutlineSend className="send" />
                </button>
           </form>
        </div>
    )
}
