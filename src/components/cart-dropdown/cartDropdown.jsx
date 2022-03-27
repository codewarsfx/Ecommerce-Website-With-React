
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../Redux/cart/cartSelector'

import Button,{buttonTypes} from '../Button/buttonComponent'
import CartItem from '../cart-item/cart-itemComponent.jsx'


import {CartDropDownContainer,EmptyMessage,CartItems} from './cartDropdown.styles.jsx'



const CartDropDown = ()=>{
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()
    
    const navigateToCheckout = ()=>{
        navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems ?(
                        
                            cartItems.map(cartItem =><CartItem key={cartItem.id} cartItem={cartItem}/>)
                        
                    ):
                    <EmptyMessage>
                       Your cart is empty
                    </EmptyMessage>
                }
           </CartItems>
            <Button buttonType={buttonTypes.base} onClick={navigateToCheckout}>Check Out</Button>
        </CartDropDownContainer>
    )
    
}



export default CartDropDown