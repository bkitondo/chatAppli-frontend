import Menu from "./Menu"
import '../styles/Pages.css'
import {useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignIn({setToken}){
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const url= "http://localhost:8080/api/auth/signin"

          console.log(`ùùùùùùùùù ${email}`)
          console.log(password)

          function Submit(e){
                    e.preventDefault()
                    axios.post(url,{
                        email,
                        password
                    })
                    .then(data=>
                        {
                            const token =  data.data.token.split(" ")[1]
                            localStorage.setItem("token", token)
                            localStorage.setItem("userId", data.data.userId)
                            // console.log(token)
                            // console.log(data)
                            // if (token === ""){
                            //     navigate("/")
                            // }
                            // else{
                                // } 
                                navigate("/accueil")
                                setToken(token)
                            }
                    )
                    .catch((err)=>console.log(err))
                }
    return(
        <main className="item">
            <form className="formulaire"   onSubmit={Submit}>
                <input  className="champ" 
                        type="tel" 
                        placeholder="Email" 
                        name="email" 
                        onChange={(e)=> setEmail(e.target.value)} 
                        value={email}
                        required
                />
                <input  className="champ" 
                        type="password" 
                        placeholder="Mot de passe" 
                        name="Password" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        value={password} 
                        required
                />
                <input  className="bouton" 
                        type="submit"  
                        value="connexion"
                />    
            </form>
            <Menu/>
        </main>
    )
}