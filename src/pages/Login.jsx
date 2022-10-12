import login from '../media/login.jpg'
import '../styles/Login.css'
import SignIn from '../components/Sign_in'
import SignUp from '../components/Sign_up'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Login = ()=>{
return(
    <div className='loginPage'> 
        <div className='item' >
            <img  className='imageLogin' src={login} alt="" />
        </div>
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<SignIn/>} />
                <Route  path='/inscription' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)
}
export default Login