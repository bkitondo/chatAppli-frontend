import DispayUsers from '../components/DisplayUsers';
import User from '../components/User';
import DisplayDiscussion from '../components/DisplayDiscussion';
import "../styles/HomePage.css"
import { useState } from 'react';

function HomePage() {
  const [currentChat, setCurrentChat] = useState({
    userName :"",
    userId :""
  })
  console.log(` currentUserId ${currentChat.userId}`);

  return (
    <div className='HomePage' >
      <User /> 
      <DispayUsers  setCurrentChat ={setCurrentChat} currentChat ={currentChat} />
      <DisplayDiscussion currentChat ={currentChat} /> 
    </div>
  );
}

export default HomePage;
