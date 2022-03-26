import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"

import {UserContext} from '../../context/userContext.jsx'
import {CartItemContext} from '../../context/cart-item'
import {signUserOut} from '../../Utils/firebase/firebaseUtils'

import {ReactComponent as Logo } from "../../assets/crown.svg"

import CartIcon from "../../components/CartIcon/cartIconComponent.jsx"
import CartDropDown from "../../components/cart-dropdown/cartDropdown.jsx"

import {NavigationContainer,NavLinksContainer,LogoContainer} from './navigation.styles.jsx'

const Navigation = ()=> {
    
    const {user} = useContext(UserContext)
    const {isCartOpen} = useContext(CartItemContext)

    return(
    <>
    <NavigationContainer>
        <LogoContainer>
            <Link to={'/'}>
            <Logo/>
            </Link>
        </LogoContainer>
        <NavLinksContainer>
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
       
        </NavLinksContainer>
       
    </NavigationContainer>
    <Outlet/>
    </>
    )  
}


export default Navigation