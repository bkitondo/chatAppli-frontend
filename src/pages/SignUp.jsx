import login from '../media/login.jpg'
import '../styles/Pages.css'
import SignUp from '../components/Sign_up'

const Inscription = ()=>{
return(
    <div className='loginPage'> 
        <div className='item' >
            <img  className='imageLogin' src={login} alt="" />
        </div>
        {/* <BrowserRouter>
            <Routes> */}
                {/* <Route  path='/connexion' element={<SignIn/>} /> */}
                <SignUp/>
                {/* <Route  path ='/accueil' element={<HomePage/>} />
            </Routes>
        </BrowserRouter> */}
    </div>
)
}
export default Inscription