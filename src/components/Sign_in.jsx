import Menu from "./Menu"
import '../styles/Login.css'

export default function SignIn(){
    return(
        <main className="item">
            <form action="">
                <input className="champ" type="text" placeholder="Identifiant"/>
                <input  className="champ" type="password" placeholder="Mot de passe" />
                <input className="bouton" type="submit"  value="connexion"/>    
            </form>
            <Menu/>
        </main>
    )
}