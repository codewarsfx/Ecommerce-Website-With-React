import {createContext,useState} from 'react'


export const ShopContext = createContext({
    products: [],
    setProduct:()=>null
})


const ShopProvider = ({children})=>{
   
    const [products,setProduct] = useState([])
    

    
    
    const value={products,setProduct}
    
    return(
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )

}

export default ShopProvider