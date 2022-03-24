import { useContext } from 'react'

import { CartItemContext} from '../../context/cart-item'

import {ShopIconSvg,ItemCount,CartIconContainer} from './cartIcon.styles'



const CartIcon = ()=>{
    
    const {setCartOpen,isCartOpen,count} = useContext(CartItemContext)
    
    const onCLickHandler =()=>{
        setCartOpen(!isCartOpen)
    }
    
    return(
        <CartIconContainer onClick={onCLickHandler}>
            <ShopIconSvg/>
            <ItemCount>{count}</ItemCount>
        </CartIconContainer>
    )
}


export default CartIcon