import { createAction } from "../../Utils/firebase/createAction"
import { cartTypes } from "./cartType"



const addItemToCart = (itemToAddCart,cartItems)=>{
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


const removeItemFromCart = (itemToRemove,cartItems)=>{
    return cartItems.filter(cartItem=> cartItem.id !== itemToRemove.id)
    
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

export const addItemQuantity = (cartitems,cartItemToAdd)=>{
    const newCartItems  = addItemToCart(cartItemToAdd,cartitems)
    
    return createAction(cartTypes.UPDATECARTITEMS, newCartItems)
  
}

export const removeItem = (cartItems,cartItemToRemove)=>{
    const newCartItems = removeItemFromCart(cartItemToRemove,cartItems)
    
    return createAction(cartTypes.UPDATECARTITEMS,newCartItems)
}


export const reduceQuantity = (cartItems,cartItemToReduce)=>{
    const newCartItems = reduceItemQuant(cartItemToReduce,cartItems)
    return createAction(cartTypes.UPDATECARTITEMS,newCartItems)
    
}


export const toggleDropdown = (cartOpen)=>{
return createAction(cartTypes.isCartOpen,!cartOpen)
}

