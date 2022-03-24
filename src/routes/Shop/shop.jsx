
import { Routes,Route } from "react-router-dom"

import CategoriesPreview from '../categories-preview/categories-preview'


import './shop.style.scss'
import CategoryFull from "../category-full/categoryFullComponent"


const Shop = ()=>{
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