import { useContext } from 'react'
import { CartItemContext } from '../../context/cart-item'


import './checkout.styles.scss'


const CheckoutItem = ({cartItem})=>{
    const {name,imageUrl,quantity,price} = cartItem
    const {removeFromCart,addToCart,reduceItemQuantity} = useContext(CartItemContext)
    
    const handleRemoveObject = ()=>{
        removeFromCart(cartItem)
    }
    
    const handleIncreaseItemQuantity = ()=>{
        addToCart(cartItem)
    }
    const handleReduceItemQuantity=()=>{
        reduceItemQuantity(cartItem)
    }
    
    return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={`${imageUrl}`} alt='hello' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={handleReduceItemQuantity}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleIncreaseItemQuantity} >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleRemoveObject}>
        &#10005;
      </div>
    </div>
    )
}

export default CheckoutItem