import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"

import {UserContext} from '../../context/userContext.jsx'
import {signUserOut} from '../../Utils/firebase/firebaseUtils'

import {ReactComponent as Logo } from "../../assets/crown.svg"
import './navigation.styles.scss'

const Navigation = ()=>{
    
    const {user} = useContext(UserContext)

    return(
    <>
    <div className="navigation">
        <div className="logo-container">
            <Link to={'/'}>
            <Logo/>
            </Link>
        </div>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            
            {
                user ?(
                    <span className="nav-link" onClick={signUserOut}>SIGN OUT</span>
                ):(
                    <Link className="nav-link" to='/signIn'>SIGN IN</Link>
                )
            }
        </div>
    </div>
    <Outlet/>
    </>
    )  
}


export default Navigation