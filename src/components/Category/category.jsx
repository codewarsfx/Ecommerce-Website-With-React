import {BackgroundImage,CategoryBodyContainer,CategoryContainer} from  './categoryStyles.jsx'

//  style={{backgroundImage:`url(${category.imageUrl})`}}/

 const Category = ({category})=>{
    return (
        
        <CategoryContainer>
               <BackgroundImage imageUrl={category.imageUrl}/>
               <CategoryBodyContainer>
                 <h2>{category.title}</h2>
                 <p>Click to Shop Now</p>
               </CategoryBodyContainer>
            </CategoryContainer>
        
    )
    
    
}

export default Category