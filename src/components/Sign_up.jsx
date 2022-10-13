import Menu from "./Menu"
// import '../styles/SignIn_Up.css'
import '../styles/Login.css'
import { useState } from "react"

export default function SignUp(){

    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirPassword] =useState("")
    console.log(`votre id ${id} votre mail ${email}  votre password ${password} votre confirmpassword ${confirmPassword}`);

    const Submit = (e)=>{
            e.preventDefault()
    }

    return(
       <main className="item">
            <form action="">
                <input 
                        className="champ" 
                        type="text" 
                        placeholder="Identifiant"
                        onChange={(e)=>{setId(e.target.value)}} value={id} 
                />
                <input 
                        className="champ" 
                        type="email" 
                        placeholder="email" 
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
                        placeholder="Confirmez votre mot de passe" 
                        onChange={(e)=>{setConfirPassword(e.target.value)}} value={confirmPassword}
                />
                {/* <input  type="file"  /> */}
                <input className="bouton" 
                        type="submit" 
                        value="inscription" 
                       onSubmit={ ()=>
                        !({password}==={confirmPassword})? console.log(` mot de passe different`): {Submit}
                       } 
                />    
            </form>
            <Menu/>
       </main>
    )
}