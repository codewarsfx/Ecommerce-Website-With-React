



import { useDispatch, useSelector } from 'react-redux'
import { addItemQuantity, reduceQuantity, removeItem } from '../../Redux/cart/cartActions.js'
import { selectCartItems } from '../../Redux/cart/cartSelector.js'
import {CheckOutItemContainer,ImgContainer,Quantity,RemoveButton} from  './checkout.styles.jsx'


const CheckoutItem = ({cartItem})=>{
    const {name,imageUrl,quantity,price} = cartItem
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    
    
    
  
    
    const handleRemoveObject = ()=>{
        dispatch(removeItem(cartItems,cartItem))
    }
    
    const handleIncreaseItemQuantity = ()=>{
       dispatch(addItemQuantity(cartItems,cartItem))
    }
    const handleReduceItemQuantity=()=>{
        dispatch(reduceQuantity(cartItems,cartItem))
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