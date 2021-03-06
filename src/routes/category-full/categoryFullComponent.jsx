import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import ProductCard from "../../components/productCard/productCardComponent"
import Spinner from "../../components/spinner/spinnerComponent"
import { selectShopProductsLoading, selectShopProductsMap } from "../../Redux/shop/shopSelector"


const CategoryFull =()=>{
    
    const shopProductsMap = useSelector(selectShopProductsMap)
    const isLoadingState = useSelector(selectShopProductsLoading)

    const {title} = useParams()
    const [category,setCategory] = useState(shopProductsMap[title])
    
    
    useEffect(()=>{

        setCategory(shopProductsMap[title])
    },[title,shopProductsMap])
    

    
    return(      
        <>
         <h2>{title.toUpperCase()}</h2>
         {
             isLoadingState? <Spinner/>:(
            <ProductContainer>     
            {
               category? category.map(product=>(<ProductCard key={product.name} product={product}/>)):null
            }       
            </ProductContainer>
             )
             
         }
      
          </>
    )
    

    
}

const ProductContainer =styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`


export default CategoryFull