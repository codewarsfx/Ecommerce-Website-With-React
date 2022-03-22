import Button from '../Button/buttonComponent'
import './productCard.styles.scss'
import  {buttonTypes} from '../Button/buttonComponent'



const ProductCard = ({product})=>{
    return(
        <div className='product-card-container'>
            <img src={`${product.imageUrl}`} alt={`${product.name}`}/>
            <Button buttonType={buttonTypes.inverted}>Add To Cart</Button>
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
        </div>
    )
}

export default ProductCard