import { useSelector,useDispatch } from 'react-redux'
import { toggleDropdown } from '../../Redux/cart/cartActions'
import { selecIsCartOpen, selectCartItemsCount } from '../../Redux/cart/cartSelector'

import {ShopIconSvg,ItemCount,CartIconContainer} from './cartIcon.styles'



const CartIcon = ()=>{
    const dispatch = useDispatch()
    const count = useSelector(selectCartItemsCount)
    const isCartOpen = useSelector(selecIsCartOpen)
    
    const handleIconClick = ()=>{
        dispatch(toggleDropdown(isCartOpen))
    }
    
  
    
    return(
        <CartIconContainer onClick={handleIconClick}>
            <ShopIconSvg/>
            <ItemCount>{count}</ItemCount>
        </CartIconContainer>
    )
}


export default CartIcon