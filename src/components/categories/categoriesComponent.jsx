import ProductCard from "../productCard/productCardComponent"
import { Link } from "react-router-dom"

import {ProductContainer} from'./categories.styles.jsx'

const Categories = ({title,products})=>{
    
    return(
        <>
        <h2><Link to={`/shop/${title}`}><span>{title.toUpperCase()}</span></Link></h2> 
      
        <ProductContainer>     
            {products.filter((_,index)=> index < 4).map(product=>(<ProductCard key={product.name} product={product}/>))
            }        
          </ProductContainer>
            </>
        
    )
}

export default Categories