import "../styles/user.css"
import profil from '../media/profil.jpg'
import {TbMessageCircle} from'react-icons/tb'

export default function User(){
    return(
        <div  className="userPage">
            <img  className="profil" src={profil}  alt="profil" />
            <div className="divPrincipal">
                <div containerMsg>
                     <TbMessageCircle className="msgCircle" />
                </div>
                <div className="barjaune">
                </div>
            </div>
        </div>
    )
}
