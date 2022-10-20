// import {Data} from '../data/data'
import '../styles/DisplayUsers.css'
import {RiSearchLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import photo from '../media/profil.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
const url = "http://localhost:8080/api/auth/signup"


export default function DispayUsers({recentUser}, {setRecentUser}){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setUsers(response.data)
            console.log("users",response.data);
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
                {users.map((user, index)=>(
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