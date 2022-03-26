import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/productCard/productCardComponent"
import { selectShopProductsMap } from "../../Redux/shop/shopSelector"


const CategoryFull =()=>{
    
    const shopProductsMap = useSelector(selectShopProductsMap)
    const {title} = useParams()
    const [category,setCategory] = useState(shopProductsMap[title])
    
    
    
    useEffect(()=>{

        setCategory(category[title])
    },[title,category])
    

    
    return(      
        <>
         <h2>{title.toUpperCase()}</h2>
            <div className="products-container">     
            {
                category.map(product=>(<ProductCard key={product.name} product={product}/>))
            }       
            </div>
          </>
    )
    
}

export default CategoryFull