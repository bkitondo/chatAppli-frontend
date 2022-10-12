import { Link } from "react-router-dom"
import '../styles/Menu.css'

const Menu =()=>{
    return(
        <nav >
            <Link className="link" to= "/">
                connexion
            </Link>
            <Link className="link" to= "/inscription">
                inscription
            </Link>
        </nav>
    )
}
export default Menu