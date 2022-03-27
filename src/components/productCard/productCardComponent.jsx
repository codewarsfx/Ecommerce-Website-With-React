
import { useDispatch, useSelector } from 'react-redux'



import Button from '../Button/buttonComponent'
import {ProductCardContainer}  from './productCard.styles.jsx'
import  {buttonTypes} from '../Button/buttonComponent'
import { selectCartItems } from '../../Redux/cart/cartSelector'
import { addItemQuantity } from '../../Redux/cart/cartActions'




const ProductCard = ({product})=>{
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    
    const addToCart=()=>{
        dispatch(addItemQuantity(cartItems,product))
    }
    
    
    return(
        <ProductCardContainer>
            <img src={`${product.imageUrl}`} alt={`${product.name}`}/>
            <Button  buttonType={buttonTypes.inverted} onClick={addToCart}>Add To Cart</Button>
        <div className='footer'>
            <span className='name'>
                {
                    product.name
                }
            </span>
            <span className='price'>
                {
                    product.price
                }
            </span>
        </div>
        </ProductCardContainer>
    )
}

export default ProductCard