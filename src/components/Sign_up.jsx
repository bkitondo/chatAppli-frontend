import Menu from "./Menu"
import '../styles/Login.css'
import {useState } from "react"
import axios from "axios"
// import '../styles/SignIn_Up.css'

export default function SignUp(){

    const [id, setId] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirPassword] =useState("")

    const url= "http://localhost:8080/api/auth/signup"

    console.log(`votre id ${id} votre mail ${telephone}  votre password ${password} votre confirmpassword ${confirmPassword}`);
    const Submit = (e)=>{
            e.preventDefault()
        //     useEffect(()=>{
        //         axios.post("http://localhost:8080/api/auth/signup", {
        //             name: {id},
        //             phone: {telephone},
        //             password : {password}
        //         }, {
        //                 headers: {
        //                         "Content-Type": "application/json"
        //                 }
        //             }
        //         )
        //         .then((user)=>{
        //                       console.log(` voici le user${user}`);
        //                   })
        //                   .catch((error)=>{
        //                       console.log(error);
        //                   })
                
        //     },[])
        const createUser = axios.post(url,{
                        userName: id,
                        phone: telephone,
                        password: password
        });
        

        createUser.then((res) => console.log(res)).catch((err) => console.log(err));
    }

    return(
       <main className="item">
            <form onSubmit={Submit}>
                <input 
                        className="champ" 
                        type="text" 
                        placeholder="Identifiant"
                        onChange={(e)=>{setId(e.target.value)}} value={id} 
                />
                <input 
                        className="champ" 
                        type="tel" 
                        placeholder="Telephone" 
                        onChange={(e)=>{setTelephone(e.target.value)}} value={telephone}
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
                />    
            </form>
            <Menu/>
       </main>
    )
}