import {Routes,Route} from 'react-router-dom'
import Directory from '../../components/Directory/directoryComponent'
import Navigation from '../Navigation/navigation'
import Shop from '../Shop/shop'

const Home = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Directory/>}/>
                <Route path='/shop' element={<Shop/>}/>
            </Route>
        </Routes>
       
    ) 
}


export default Home 