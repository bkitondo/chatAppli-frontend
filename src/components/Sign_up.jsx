import Menu from "./Menu"
// import '../styles/SignIn_Up.css'
import '../styles/Login.css'

export default function SignUp(){
    return(
       <main className="item">
            <form action="">
                <input className="champ" type="text" placeholder="Identifiant" />
                <input className="champ" type="email" placeholder="email" />
                <input className="champ" type="password" placeholder="Mot de passe" />
                <input className="champ" type="password" placeholder="Confirmez votre mot de passe" />
                {/* <input  type="file"  /> */}
                <input className="bouton" type="submit" value="inscription" />    
            </form>
            <Menu/>
       </main>
    )
}