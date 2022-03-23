import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'


import {CartItemContext} from '../../context/cart-item'
import Button from '../Button/buttonComponent'
import CartItem from '../cart-item/cart-itemComponent.jsx'


import './cartDropdown.styles.scss'



const CartDropDown = ()=>{
    
    const {cartItems} = useContext(CartItemContext)
    const navigate = useNavigate()
    
    const navigateToCheckout = ()=>{
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems ?(
                        
                            cartItems.map(cartItem =><CartItem key={cartItem.id} cartItem={cartItem}/>)
                        
                    ):
                    <span className='empty-message'>
                       Your cart is empty
                    </span>
                }
            </div>
            <Button onClick={navigateToCheckout}>Check Out</Button>
        </div>
    )
    
}



export default CartDropDown