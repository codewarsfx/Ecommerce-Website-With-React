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



const removeItemFromCart = (itemToAddCart,cartItems)=>{
    return cartItems.filter(cartItem=> cartItem.id !== itemToAddCart.id)
    
}


const reduceItemQuant = (itemToReduce,cartItems)=>{
    if(itemToReduce.quantity === 1){
        return removeItemFromCart(itemToReduce,cartItems)
    }
    
    const updatedCartItems = cartItems.map(cartItem=>{
        if(cartItem.id===itemToReduce.id){
            return {...cartItem,quantity:cartItem.quantity-1}
        }
        return cartItem
    })
    
    return updatedCartItems
    
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
    const [total,setTotal] = useState(0)
    
    const addToCart = (product)=>{
        setCartItems(isItemInCart(product,cartItems))
    }
    
    const removeFromCart = (product)=>{
        setCartItems(removeItemFromCart(product,cartItems))
    }
    
    const reduceItemQuantity = (product)=>{
        setCartItems(reduceItemQuant(product,cartItems))
    }
    
    useEffect(()=>{
         const count = cartItems.reduce((sum,carItem)=>(sum+carItem.quantity),0)
         setCount(count)  
    },[cartItems])
    
    useEffect(()=>{
        const total = cartItems.reduce((total,cartItem)=>(
            (cartItem.quantity * cartItem.price) + total
        ),0)
      setTotal(total)
        
    },[cartItems])
    
    
    const value = {cartItems,addToCart,setCartOpen,isCartOpen,count,removeFromCart,reduceItemQuantity,total}
    return(
        <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
    )
}

export default CartItemProvider