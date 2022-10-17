import "../styles/DisplayDiscussion.css"
import '../styles/DisplayUsers.css'
import {AiOutlineSend} from 'react-icons/ai'

export default function DisplayDiscussion({recentUser}){
        
    return(
        <div className="discussionPage">
           <ul   className="person">
                <li className="userName" >{recentUser.userName}</li>
                <li className="recentMessage">{recentUser.message}</li>
           </ul>
           <div className="allMessages">

           </div>
           <form className="message">
                <textarea  rows="1" className="msg"/>
                {/* <input type="submit" className="send"  /> */}
                <AiOutlineSend className="send" />
           </form>
        </div>
    )
}
