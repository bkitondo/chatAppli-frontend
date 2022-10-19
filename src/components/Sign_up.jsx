import Menu from "./Menu"
import '../styles/Pages.css'
import {useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirPassword] =useState("")
    const navigate = useNavigate()
    const url= "http://localhost:8080/api/auth/signup"

    const Submit = (e)=>{
            e.preventDefault()
        if(password === confirmPassword){
                axios.post(url,{
                                userName: name,
                                email,
                                password
                })
                .then(() => navigate("/"))
                .catch((err) => console.log(err));
        }
        else{console.log("mot de passe different");}
    }
    return(
       <main className="item">
            <form  className="formulaire" onSubmit={Submit}>
                <input 
                        className="champ" 
                        type="text" 
                        placeholder="Nom"
                        onChange={(e)=>{setName(e.target.value)}} value={name} 
                />
                <input 
                        className="champ" 
                        type="tel" 
                        placeholder="Email" 
                        onChange={(e)=>{setEmail(e.target.value)}} value={email}
                />
                <input 
                        className="champ" 
                        type="password" 
                        placeholder="Mot de passe" 
                        onChange={(e)=>{setPassword(e.target.value)}} value={password}
                />
                <input 
                        className="champ"  
                        type="password" 
                        placeholder="Confirmez mot de passe" 
                        onChange={(e)=>{setConfirPassword(e.target.value)}} value={confirmPassword}
                />
                {/* <input  type="file"  /> */}
                <input className="bouton" 
                        type="submit" 
                        value="inscription"
                />    
            </form>
            <Menu/>
       </main>
    )
}