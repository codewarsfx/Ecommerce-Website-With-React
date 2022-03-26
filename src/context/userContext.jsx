// import {createContext,useState,useEffect} from 'react'

// import{subscribeToFirebaseAuthService,createUserDocument} from '../Utils/firebase/firebaseUtils'

// export const UserContext = createContext({
//     user:null,
//     setUser: ()=> null
// })


// const UserProvider = ({children}) => {
//     const [user,setUser] = useState(null)
//     useEffect(()=>{
//         const subscribe = subscribeToFirebaseAuthService((user)=>{
//             if(user){
//                 createUserDocument(user)
//             }
//             setUser(user)
//         })
//         return subscribe
//     },[])
//     return( 
//         <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
//     ) 
// }

// export default UserProvider