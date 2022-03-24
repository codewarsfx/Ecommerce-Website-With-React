import CartItemComponent from  './cartItem.styles.jsx'


const CartItem = ({cartItem})=>{
    
    const {name,imageUrl,quantity,price} = cartItem
    
    return(
    <CartItemComponent>
        <img src={imageUrl} alt={`${name}`} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
            {quantity} x ${price}
            </span>
        </div>
    </CartItemComponent>
    )
}


export default CartItem