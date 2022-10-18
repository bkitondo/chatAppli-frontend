import Menu from "./Menu"
import '../styles/Pages.css'
import {useState } from "react"
import axios from "axios"


export default function SignIn(){
    const [telephone,setTelephone] = useState("")
    const [password, setPassword] = useState("")
    const url= "http://localhost:8080/api/auth/signin"

          console.log(`ùùùùùùùùù ${telephone}`)
          console.log(password)

          function Submit(e){
                    e.preventDefault()
                    const Connexion = axios.post(url,{
                                    phone: telephone,
                                    password
                    })
            
                    Connexion.then((res) => console.log(res)).catch((err) => console.log(err));
                }
          

    return(
        <main className="item">
            <form className="formulaire"   onSubmit={Submit}>
                <input  className="champ" 
                        type="tel" 
                        placeholder="Numero de telephone" 
                        name="telephone" 
                        onChange={(e)=> setTelephone(e.target.value)} 
                        value={telephone}
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