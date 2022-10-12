import { Link } from "react-router-dom"

const Menu =()=>{
    return(
        <nav>
            <Link  to= "/">
                connexion
            </Link>
            <Link  to= "/inscription">
                inscription
            </Link>
        </nav>
    )
}
export default Menu