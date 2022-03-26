import { useContext } from 'react'
import { CartItemContext } from '../../context/cart-item'



import {CheckOutItemContainer,ImgContainer,Quantity,RemoveButton} from  './checkout.styles.jsx'


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
    <CheckOutItemContainer>
      <ImgContainer>
        <img src={`${imageUrl}`} alt='hello' />
      </ImgContainer>
      <span className='name'>{name}</span>
      <Quantity>
        <div className='arrow' onClick={handleReduceItemQuantity}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleIncreaseItemQuantity} >
          &#10095;
        </div>
      </Quantity>
      <span className='price'>{price}</span>
      <RemoveButton onClick={handleRemoveObject}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
    )
}

export default CheckoutItem