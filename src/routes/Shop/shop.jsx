import { useContext } from "react"

import ProductCard from "../../components/productCard/productCardComponent"
import {ShopContext} from '../../context/shopContext'

import './shop.style.scss'


const Shop = ()=>{
    
    const {products}= useContext(ShopContext)
    console.log(products)

    return(
      <div className="products-container">
          {
              products.map(product=>(
                  <ProductCard key={product.id} product={product}/>
              ))
          }
      </div>
    )
    
}

export default Shop 