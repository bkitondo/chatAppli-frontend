import login from '../media/login.jpg'
import '../styles/Pages.css'
import SignIn from '../components/Sign_in'
// import HomePage from './HomePage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Connexion = ()=>{
return(
    <div className='loginPage'> 
        <div className='item' >
            <img  className='imageLogin' src={login} alt="" />
        </div>
        {/* <BrowserRouter>
            <Routes> */}
                <SignIn/>
                {/* <Route  path='/inscription' element={<SignUp/>}/> */}
                {/* <Route  path ='/accueil' element={<HomePage/>} /> */}
            {/* </Routes>
        </BrowserRouter> */}
    </div>
)
}
export default Connexion