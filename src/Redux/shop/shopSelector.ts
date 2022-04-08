import { createSelector } from "reselect";
import { initialState } from "./shopReducer";
import { categoryMap } from "./shopTypes";


const shopState = (state):initialState=> state.shop



//selector for getting products array
export const shopProducts = createSelector([shopState],(shop)=>shop.products)


//selector for transforming products array to a map where product title maps to the list of products under that category
export const selectShopProductsMap = createSelector([shopProducts],(shopProducts):categoryMap=>(shopProducts.reduce((acc,shopProduct)=>{
    
  
    const {items,title} = shopProduct
    
    acc[title] = items
    return acc
  }
  ,{} as  categoryMap)))
  
  
export const selectShopProductsLoading = createSelector([shopState],(shop)=>shop.isLoading)