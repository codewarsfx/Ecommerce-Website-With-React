import { useContext } from 'react'


import CheckoutItem from '../../components/checkout-item/checkoutItemComponent'
import { CartItemContext } from '../../context/cart-item'


import { Total,CheckoutHeader,CheckoutContainer} from './checkout.styles.jsx'


const Checkout = ()=>{
    
    const {cartItems,total} = useContext(CartItemContext)
    
   return(
      <CheckoutContainer>
      <CheckoutHeader>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </CheckoutHeader>{
          cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
      }
      <Total>TOTAL: {total}</Total>
    </CheckoutContainer>
   )
    
}

export default Checkout