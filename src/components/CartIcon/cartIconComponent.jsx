import { useContext } from 'react'

import { CartItemContext} from '../../context/cart-item'
import './cartIcon.styles.scss'

import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'




const CartIcon = ()=>{
    
    const {setCartOpen,isCartOpen,count} = useContext(CartItemContext)
    
    const onCLickHandler =()=>{
        setCartOpen(!isCartOpen)
    }
    
    return(
        <div className='cart-icon-container' onClick={onCLickHandler}>
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>{count}</span>
        </div>
    )
}


export default CartIcon