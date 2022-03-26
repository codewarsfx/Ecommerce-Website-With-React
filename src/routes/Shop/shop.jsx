
import { Routes,Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryFull from "../category-full/categoryFullComponent"
import { getCollectionDataFromFirebase } from '../../Utils/firebase/firebaseUtils'
import { setShopData } from "../../Redux/shop/shopActions"


const Shop = ()=>{
    const dispatch = useDispatch()
  
     useEffect(()=>{
    
        
        const getCollection = async ()=>{
           const data= await getCollectionDataFromFirebase()
          dispatch(setShopData(data)) 
        }
        getCollection()
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