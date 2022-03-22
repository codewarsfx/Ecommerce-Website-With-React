import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"

import {UserContext} from '../../context/userContext.jsx'
import {CartItemContext} from '../../context/cart-item'
import {signUserOut} from '../../Utils/firebase/firebaseUtils'

import {ReactComponent as Logo } from "../../assets/crown.svg"
import './navigation.styles.scss'
import CartIcon from "../../components/CartIcon/cartIconComponent.jsx"
import CartDropDown from "../../components/cart-dropdown/cartDropdown.jsx"

const Navigation = ()=>{
    
    const {user} = useContext(UserContext)
    const {isCartOpen} = useContext(CartItemContext)

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
             <CartIcon/>
             {
                 isCartOpen?<CartDropDown/>:null
             }
       
        </div>
       
    </div>
    <Outlet/>
    </>
    )  
}


export default Navigation