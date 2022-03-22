import { createContext, useState,useEffect} from "react";


const isItemInCart = (itemToAddCart,cartItems)=>{
        //check if item is in cart
            const isItem = cartItems.find(item=>item.id === itemToAddCart.id)
    //if item is in the cart add to the quantity
    if(isItem){
        const updatedItemsQuantity = cartItems.map(item=>{
            if(item.id === itemToAddCart.id){
                return {...item,quantity:item.quantity+1}
            }
            return item
        })
        return updatedItemsQuantity
    }

    //if items is not in the cart initialize it with a quantity of one  
    return [...cartItems,{...itemToAddCart,quantity:1}]
}


export const CartItemContext = createContext({
    cartItems: [],
    isCartOpen: false,
    setCartItems :()=>null,
    addToCart:()=>null,
    setCartOpen: ()=> null,
    count:0
})




const CartItemProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([])
    const [isCartOpen,setCartOpen] =useState(false)
    const [count,setCount] = useState(0)
    
    const addToCart = (product)=>{
        setCartItems(isItemInCart(product,cartItems))
    }
    
    useEffect(()=>{
         const count = cartItems.reduce((sum,carItem)=>(sum+carItem.quantity),0)
         setCount(count)  
    },[cartItems])
    
    
    const value = {cartItems,addToCart,setCartOpen,isCartOpen,count}
    return(
        <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
    )
}

export default CartItemProvider