

import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkoutItemComponent'
import StripeForm from '../../components/stripe-form/stripeFormCOmponent'
import { selectCartItems, selectCartItemsTotal } from '../../Redux/cart/cartSelector'

import { Total,CheckoutHeader,CheckoutContainer} from './checkout.styles.jsx'


const Checkout = ()=>{
  const total = useSelector(selectCartItemsTotal)
  const cartItems = useSelector(selectCartItems)
    
   
   return(
     <>
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
    <StripeForm/>
    </CheckoutContainer>
  
    </>
   )
    
}

export default Checkout