import Category from '../Category/category'
import {DirectoryComponent} from './directory.styles.jsx'
import categoriesData from '../../dev-data/categories.json'


const Directory = ()=>{
    return(
         <DirectoryComponent>
        {
          categoriesData.map(category=>(
            <Category key={category.id} category={category}/>
    
          ))
        }
      </DirectoryComponent>
    )
    
}

export default Directory