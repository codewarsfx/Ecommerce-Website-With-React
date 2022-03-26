import { useSelector } from "react-redux"
import Categories from "../../components/categories/categoriesComponent"
import {selectShopProductsMap } from "../../Redux/shop/shopSelector"


const CategoriesPreview =()=>{
    const productsMap = useSelector(selectShopProductsMap)
    return(
        <>
        {
            Object.keys(productsMap).map(title => {
                const categoriesProduct = productsMap[title]
                return <Categories key={title} title={title} products= {categoriesProduct}/>
            })
        }  
        </>
        
    )
}


export default CategoriesPreview