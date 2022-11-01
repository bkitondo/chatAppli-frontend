import '../styles/DisplayUsers.css'
import {RiSearchLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import photo from '../media/profil.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { signUpRoute, createOrFindConversation} from '../utils/url'

export default function DispayUsers({setCurrentChat, currentChat,setConversationId }){
    const [contacts, setContacts] = useState([]),
          [currentUser, setCurrentUser] = useState(""),
          [online, setOnline] = useState(false)
    
    const token = localStorage.getItem("token"),
          currentUserId = localStorage.getItem("userId")

    useEffect(()=>{
        setCurrentUser(localStorage.getItem("userName"))
        !currentUser ? setOnline(true) : setOnline(false)
    }, [token]);
    
    useEffect(()=>{
        axios.get(`${signUpRoute}/${currentUserId}`)
        .then((response)=>{
            setContacts(response.data)
            console.log(" les contacts",response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[token])


    useEffect(()=>{
        // console.log('dmcklqclqmcqmùlxmù');

console.log(`from ${currentUserId} to ${currentChat.userId}`);

            axios.get(`${createOrFindConversation}/${currentUserId}/${currentChat.userId}`)
            .then((conv)=>{
                setConversationId(conv.data.conversation._id)
            })
            .catch((err) => { throw err})
    },[currentChat.userId, currentUserId])
    

    return(
        <div  className="usersPage">
          <div className='searchContainer' >
              <RiSearchLine className='search' />
              <input type="text" placeholder='Search' />
              <FiMoreVertical  className='more'/>
          </div>  
          <div className='containerAllUser'>
                <h3>Recent</h3>
            <div className='AllUser' >
                {contacts.map((contact, index)=>(
                   <div 
                   onClick={()=>setCurrentChat({
                    userName: contact.userName,
                    userId : contact._id
                   })}
                   className='everyUser' key = {index} >
                        <img 
                       src={photo} 
                       alt="l'utilisateur" />
                       <ul>
                            <li className='userName' >{contact.userName}</li>
                       </ul>
                   </div>  
                ))}
            </div>
          </div>
        </div>
    )
}