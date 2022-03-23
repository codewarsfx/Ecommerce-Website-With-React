import {createContext,useEffect,useState} from 'react'
import { getCollectionDataFromFirebase } from '../Utils/firebase/firebaseUtils'

export const ShopContext = createContext({
    products: [],
    setProduct:()=>null
})


const ShopProvider = ({children})=>{
   
    const [products,setProduct] = useState([])
    
    useEffect(()=>{
    
        
        const getCollection = async ()=>{
           const data= await getCollectionDataFromFirebase()
           console.log(data)
        
        }
        getCollection()
    },[])

    
    
    const value={products,setProduct}
    
    return(
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )

}

export default ShopProvider