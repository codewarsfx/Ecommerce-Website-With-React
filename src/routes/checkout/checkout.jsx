import { useContext } from 'react'


import CheckoutItem from '../../components/checkout-item/checkoutItemComponent'
import { CartItemContext } from '../../context/cart-item'


import './checkout.styles.scss'


const Checkout = ()=>{
    
    const {cartItems,total} = useContext(CartItemContext)
    
   return(
      <div className='checkout-container'>
      <div className='checkout-header'>
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
      </div>{
          cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
      }
      <div className='total'>TOTAL: {total}</div>
    </div>
   )
    
}

export default Checkout