import {useContext} from 'react'

import {CartItemContext} from '../../context/cart-item'
import Button from '../Button/buttonComponent'
import {ProductCardContainer}  from './productCard.styles.jsx'
import  {buttonTypes} from '../Button/buttonComponent'




const ProductCard = ({product})=>{
    
    const {addToCart} = useContext(CartItemContext)
    return(
        <ProductCardContainer>
            <img src={`${product.imageUrl}`} alt={`${product.name}`}/>
            <Button  buttonType={buttonTypes.inverted} onClick={() =>addToCart(product)}>Add To Cart</Button>
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