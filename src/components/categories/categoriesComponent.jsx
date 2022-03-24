import ProductCard from "../productCard/productCardComponent"
import { Link } from "react-router-dom"

import './categories.styles.scss'

const Categories = ({title,products})=>{
    
    return(
        <>
        <h2><Link to={`/shop/${title}`}><span>{title.toUpperCase()}</span></Link></h2> 
      
        <div className="products-container">     
            {products.filter((_,index)=> index < 4).map(product=>(<ProductCard key={product.name} product={product}/>))
            }        
          </div>
            </>
        
    )
}

export default Categories