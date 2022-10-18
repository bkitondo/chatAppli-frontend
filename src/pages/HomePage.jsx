import DispayUsers from '../components/DisplayUsers';
import User from '../components/User';
import DisplayDiscussion from '../components/DisplayDiscussion';
import "../styles/HomePage.css"
import { useState } from 'react';

function HomePage() {
  const [recentUser, setRecentUser] = useState({
    userName :"bleudy",
    message :"kitondo"
  })
  console.log(` mmmmmm ${recentUser.message}`);

  return (
    <div className='HomePage' >
      <User /> 
      <DispayUsers  recentUser ={recentUser} setRentUser ={setRecentUser} />
      <DisplayDiscussion recentUser ={recentUser}/> 


    </div>
  );
}

export default HomePage;
