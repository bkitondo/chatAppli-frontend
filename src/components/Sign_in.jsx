import Menu from "./Menu"
import '../styles/Pages.css'
import {useState } from "react"

export default function SignIn(){
    const [id,setId] = useState("")
    const [password, setPassword] = useState("")
          console.log(`ùùùùùùùùù ${id}`)
          console.log(password)

          function Submit(e){
                    e.preventDefault()
          }

    return(
        <main className="item">
            <form className="formulaire" >
                <input  className="champ" 
                        type="tel" 
                        placeholder="Identifiant" 
                        name="Id" 
                        onChange={(e)=> setId(e.target.value)} 
                        value={id}
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
                        onSubmit={Submit}
                />    
            </form>
            <Menu/>
        </main>
    )
}