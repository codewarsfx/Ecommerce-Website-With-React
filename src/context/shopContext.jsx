import {createContext,useState} from 'react'
import  shopData from '../dev-data/shop.json'

export const ShopContext = createContext({
    products: [],
    setProduct:()=>null
})


const ShopProvider = ({children})=>{
    const [products,setProduct] = useState(shopData)
    const value={products,setProduct}
    return(
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
    
}

export default ShopProvider