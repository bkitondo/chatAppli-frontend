import {Data} from '../data/data'
import '../styles/DisplayUsers.css'
import {RiSearchLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import photo from '../media/profil.jpg'

export default function DispayUsers({recentUser}, {setRecentUser}){
    console.log("okokokok",recentUser);
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
                {Data.map((user, index)=>(
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
                            <li className='recentMessage' >{user.userLastName}</li>
                       </ul>
                   </div>  
                ))}
            </div>
          </div>
        </div>
    )
}