import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/productCard/productCardComponent"
import { ShopContext } from "../../context/shopContext"

const CategoryFull =()=>{
    
    const [category,setCategory] = useState([])
    
    const {products} = useContext(ShopContext)
    
    const params = (useParams()).title
    
    
    useEffect(()=>{
        
        const cat = products[params]
        
        setCategory(cat)
    },[params,products])
    

    
    return(      
        <>
         <h2>{params.toUpperCase()}</h2>
            <div className="products-container">     
            {
                category.map(product=>(<ProductCard key={product.name} product={product}/>))
            }       
            </div>
          </>
    )
    
}

export default CategoryFull