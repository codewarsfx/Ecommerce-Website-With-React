// import { createContext, useState,useEffect} from "react";








// export const CartItemContext = createContext({
//     cartItems: [],
//     isCartOpen: false,
//     setCartItems :()=>null,
//     addToCart:()=>null,
//     setCartOpen: ()=> null,
//     count:0
// })




// const CartItemProvider = ({children})=>{
//     const [cartItems,setCartItems] = useState([])
//     const [isCartOpen,setCartOpen] =useState(false)
//     const [count,setCount] = useState(0)
//     const [total,setTotal] = useState(0)
    
//     const addToCart = (product)=>{
//         setCartItems(isItemInCart(product,cartItems))
//     }
    
//     const removeFromCart = (product)=>{
//         setCartItems(removeItemFromCart(product,cartItems))
//     }
    
//     const reduceItemQuantity = (product)=>{
//         setCartItems(reduceItemQuant(product,cartItems))
//     }
    
//     useEffect(()=>{
//          const count = cartItems.reduce((sum,carItem)=>(sum+carItem.quantity),0)
//          setCount(count)  
//     },[cartItems])
    
//     useEffect(()=>{
//         const total = cartItems.reduce((total,cartItem)=>(
//             (cartItem.quantity * cartItem.price) + total
//         ),0)
//       setTotal(total)
        
//     },[cartItems])
    
    
//     const value = {cartItems,addToCart,setCartOpen,isCartOpen,count,removeFromCart,reduceItemQuantity,total}
//     return(
//         <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
//     )
// }

// export default CartItemProvider