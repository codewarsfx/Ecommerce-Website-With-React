import { createSelector } from "reselect";


const cart = (state) => state.cart


export const selectCartItems = createSelector([cart],(cart)=>cart.cartItems)

export const selecIsCartOpen = createSelector([cart], (cart)=> cart.isCartOpen)


export const selectCartItemsTotal = createSelector([selectCartItems],(cartItems)=>(cartItems.reduce((total,cartItem)=>((cartItem.quantity * cartItem.price) + total
        ),0)))
        
export const selectCartItemsCount = createSelector([selectCartItems],(cartItems)=>(
    cartItems.reduce((sum,carItem)=>(sum+carItem.quantity),0)
))