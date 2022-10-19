import login from '../media/login.jpg'
import '../styles/Pages.css'
import SignIn from '../components/Sign_in'

const Connexion = ({setToken})=>{
   
return(
    <div className='loginPage'> 
        <div className='item' >
            <img  className='imageLogin' src={login} alt="" />
        </div>
        <SignIn  setToken={setToken}/>
    </div>
)
}
export default Connexion