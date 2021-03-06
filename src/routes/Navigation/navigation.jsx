import { Link, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import {createUserSelector} from '../../Redux/user/userSelector'


import {ReactComponent as Logo } from "../../assets/crown.svg"

import CartIcon from "../../components/CartIcon/cartIconComponent.jsx"
import CartDropDown from "../../components/cart-dropdown/cartDropdown.jsx"

import {NavigationContainer,NavLinksContainer,LogoContainer} from './navigation.styles.jsx'
import { selecIsCartOpen } from "../../Redux/cart/cartSelector"
import { createUserSignOutStart } from "../../Redux/user/userAction"

const Navigation = ()=> {
    const dispatch = useDispatch()
    const user = useSelector(createUserSelector)
    const isCartOpen = useSelector(selecIsCartOpen)
    
    const signUserOut = ()=>{
        dispatch(createUserSignOutStart())
    }
    
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