// import {data} from '../data/data'
import '../styles/DisplayUsers.css'
import {RiSearchLine} from 'react-icons/ri';
import {FiMoreVertical} from 'react-icons/fi'



export default function DispayUsers(){
    return(
        <div  className="usersPage">
          <div className='searchContainer' >
              <RiSearchLine className='search' />
              <input type="text" placeholder='Search' />
              <FiMoreVertical  className='more'/>
          </div>  
          <div>

          </div>
        </div>
    )
}