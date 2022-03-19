import Category from '../Category/category'
import './directory.styles.scss'
import categoriesData from '../../dev-data/categories.json'


const Directory = ()=>{
    return(
         <div className="categories-container">
        {
          categoriesData.map(category=>(
            <Category id={category.id} category={category}/>
          ))
        }
      </div>
    )
    
}

export default Directory