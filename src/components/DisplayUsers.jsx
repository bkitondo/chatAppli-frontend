import '../styles/DisplayUsers.css'
import {RiSearchLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import photo from '../media/profil.jpg'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { signUpRoute, serverRoute} from '../utils/url'
// import {io} from "socket.io-client"
// import { Socket } from 'socket.io'
// import { useNavigate } from 'react-router-dom'

export default function DispayUsers({recentUser}, {setRecentUser}){
    // const socket = useRef()
    // const navigate = useNavigate()
    const [contacts, setContacts] = useState([])
    const [currentUser, setCurrentUser] = useState(undefined)
    const [online, setOnline] = useState(false)
    const [currentChat, setCurrentChat] = useState(undefined)

    const token = localStorage.getItem("token")

    useEffect(()=>{
        setCurrentUser(localStorage.getItem("userName"))
        !currentUser ? setOnline(true) : setOnline(false)
    }, [token]);
    console.log(`${currentUser} voici le user en ligne`);
    console.log(`${online} voici le status en ligne`);

    // useEffect(()=>{
    //     if(currentUser){
    //         socket.current = io(serverRoute)
    //         socket.current.emit("utilisateur ajouté")
    //     }
    // },[currentUser])
    
    useEffect(()=>{
        axios.get(signUpRoute)
        .then((response)=>{
            setContacts(response.data)
            console.log(" les contacts",response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

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
                {contacts.map((user, index)=>(
                   <div  className='everyUser' key = {index} >
                        <img 
                       src={photo} 
                       alt="l'utilisateur" />
                       <ul   
                       onClick={()=> setRecentUser({
                    userName:user.userName,
                    message : user.userLastName
                   })} 
                   >
                            <li className='userName' >{user.userName}</li>
                            <li className='recentMessage' >{user.email}</li>
                       </ul>
                   </div>  
                ))}
            </div>
          </div>
        </div>
    )
}