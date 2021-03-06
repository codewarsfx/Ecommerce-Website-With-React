
import { Routes,Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import {createShopDataStart} from '../../Redux/shop/shopActions'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryFull from "../category-full/categoryFullComponent"


const Shop = ()=>{
    const dispatch = useDispatch()
  
    useEffect(()=>{
      
      dispatch(createShopDataStart())
    },[dispatch])
  
  
    return(
      <>
       <Routes>
           <Route index element={<CategoriesPreview/>}/>
           <Route path=":title" element={<CategoryFull/>}/>
       </Routes>
      </>
    )
    
}

export default Shop 