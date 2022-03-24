import { useContext } from "react"
import Categories from "../../components/categories/categoriesComponent"
import { ShopContext } from "../../context/shopContext"

const CategoriesPreview =()=>{
    const {products} = useContext(ShopContext)
    return(
        <>
        {
            Object.keys(products).map(title => {
                const categoriesProduct = products[title]
                return <Categories key={title} title={title} products= {categoriesProduct}/>
            })
        }  
        </>
        
    )
}


export default CategoriesPreview