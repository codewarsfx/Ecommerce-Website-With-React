import {Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';





import Home from "./routes/Home/home";
import Shop from './routes/Shop/shop'
import Navigation from './routes/Navigation/navigation'
import Authenticate from './routes/Authenticate/authenticateComponent'
import Checkout from './routes/checkout/checkout';
import{subscribeToFirebaseAuthService,createUserDocument} from './Utils/firebase/firebaseUtils'
import {createActionTypes} from './Utils/firebase/createAction'
import {userTypes} from './Redux/user/userTypes'




function App() {
  
  const dispatch= useDispatch()
  
    useEffect(()=>{
        const subscribe = subscribeToFirebaseAuthService((user)=>{
            if(user){
                createUserDocument(user)
            }
            dispatch(createActionTypes(userTypes.SETUSER,user))
        })
        return subscribe
    },[dispatch])
  
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/shop/*' element={<Shop/>}/>
                <Route path='/signIn' element={<Authenticate/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
       
    </div>
  );
}

export default App;
