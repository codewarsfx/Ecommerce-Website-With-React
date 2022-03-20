import {initializeApp} from 'firebase/app'

import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfigObject = {
  apiKey: "AIzaSyCMJMXdTgfpJXPgxeAHKSbayePL0fkg-TA",
  authDomain: "ecommerce-website-22d83.firebaseapp.com",
  projectId: "ecommerce-website-22d83",
  storageBucket: "ecommerce-website-22d83.appspot.com",
  messagingSenderId: "902067509820",
  appId: "1:902067509820:web:f2d42d50e25a4136ba8139"
};

initializeApp(firebaseConfigObject)
export const auth = getAuth()

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    "prompt": "select_account"
})


export const signInWIthGooglePopup = ()=>(signInWithPopup(auth,provider))

export const firestore = getFirestore()



export const createUserDocument = async (userAccount,otherOptions)=>{
  
  if(!userAccount) return
  
  // get the document reference in the collection
  const userRef = doc(firestore,'users',userAccount.uid)
  
  //get the current snapshot of the document 
  const userSnapshot = await getDoc(userRef)
  
  // check if the userDocument exists if it does do nothing ,,if it doesnt create it 
  if(!userSnapshot.exists()){
    
    const {displayName,email} = userAccount
    
    const createdAt = new Date()
    
    setDoc(userRef,{
      displayName,
      email,
      createdAt,
      ...otherOptions
    })
    
  }
  return userRef
}