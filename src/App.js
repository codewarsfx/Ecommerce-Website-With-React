import {Routes,Route} from 'react-router-dom'
import Home from "./routes/Home/home";
import Shop from './routes/Shop/shop'
import Navigation from './routes/Navigation/navigation'
import Authenticate from './routes/Authenticate/authenticateComponent'


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/signIn' element={<Authenticate/>}/>
            </Route>
        </Routes>
       
    </div>
  );
}

export default App;
