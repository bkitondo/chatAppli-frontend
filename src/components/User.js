import "../styles/user.css"
import profil from '../media/profil.jpg'
import {AiFillMessage} from'react-icons/ai'

export default function User(){
    return(
        <div  className="userPage">
            <img  className="profil" src={profil}  alt="profil" />
            <div className="divPrincipal">
                <div className="containerMsg">
                     <AiFillMessage className="msgCircle" />
                </div>
                <div className="barjaune">
                </div>
            </div>
        </div>
    )
}
