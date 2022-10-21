import '../styles/DisplayUsers.css'
import {RiSearchLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import photo from '../media/profil.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { signUpRoute} from '../utils/url'
// import {io} from "socket.io-client"
// import { Socket } from 'socket.io'

export default function DispayUsers({setCurrentChat}){
    // const socket = useRef()
    const [contacts, setContacts] = useState([]),
          [currentUser, setCurrentUser] = useState(""),
          [online, setOnline] = useState(false)
    
    const token = localStorage.getItem("token"),
          currentUserId = localStorage.getItem("userId")

    useEffect(()=>{
        setCurrentUser(localStorage.getItem("userName"))
        !currentUser ? setOnline(true) : setOnline(false)
    }, [token]);
    // console.log(`${currentUser} voici le user en ligne`);
    // console.log(`${online} voici le status en ligne`);

    // useEffect(()=>{
    //     if(currentUser){
    //         socket.current = io(serverRoute)
    //         socket.current.emit("utilisateur ajouté")
    //     }
    // },[currentUser])
    
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
                            {/* <li className='recentMessage' >{contact._id}</li> */}
                       </ul>
                   </div>  
                ))}
            </div>
          </div>
        </div>
    )
}