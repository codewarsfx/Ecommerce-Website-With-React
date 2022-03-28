import { useSelector } from "react-redux"
import Categories from "../../components/categories/categoriesComponent"
import Spinner from "../../components/spinner/spinnerComponent"
import {selectShopProductsLoading, selectShopProductsMap } from "../../Redux/shop/shopSelector"


const CategoriesPreview =()=>{
    const productsMap = useSelector(selectShopProductsMap)
    const isLoadingState = useSelector(selectShopProductsLoading)
    return(
        <>{
            isLoadingState? <Spinner/> : (
        
            Object.keys(productsMap).map(title => {
                const categoriesProduct = productsMap[title]
                return <Categories key={title} title={title} products= {categoriesProduct}/>
            })
        )
        }
     
        </>
        
    )
}


export default CategoriesPreview