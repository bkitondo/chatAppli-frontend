import DispayUsers from '../components/DisplayUsers';
import User from '../components/User';
import DisplayDiscussion from '../components/DisplayDiscussion';
import "../styles/HomePage.css"

function HomePage() {

  return (
    <div className='HomePage' >
      <User/> 
      <DispayUsers/>
      <DisplayDiscussion/> 


    </div>
  );
}

export default HomePage;
