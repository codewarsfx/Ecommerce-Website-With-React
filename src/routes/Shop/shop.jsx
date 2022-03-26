
import { Routes,Route } from "react-router-dom"

import CategoriesPreview from '../categories-preview/categories-preview'


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


// const ShopContainer = styled.div`
  
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 10px;
//   row-gap: 50px;

// `

export default Shop 