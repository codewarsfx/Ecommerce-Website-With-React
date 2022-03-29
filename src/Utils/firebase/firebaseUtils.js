import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,getDocs,query} from 'firebase/firestore'


//initialize firebase app
const firebaseConfigObject = {
  apiKey: "AIzaSyCMJMXdTgfpJXPgxeAHKSbayePL0fkg-TA",
  authDomain: "ecommerce-website-22d83.firebaseapp.com",
  projectId: "ecommerce-website-22d83",
  storageBucket: "ecommerce-website-22d83.appspot.com",
  messagingSenderId: "902067509820",
  appId: "1:902067509820:web:f2d42d50e25a4136ba8139"
};

initializeApp(firebaseConfigObject)

//create firebase instance related to the initalized firebase app 
export const auth = getAuth()
export const firestore = getFirestore()

//Define auth providers 
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    "prompt": "select_account"
})


//define sign in  and sign up methods
//signinwithgoogleauth
export const signInWIthGooglePopup = ()=>(signInWithPopup(auth,provider))

//sign up with email and password
export const signUpwithUserNameandPassord= async (email,password)=>{
 return await createUserWithEmailAndPassword(auth,email,password)
 
}


// sign in with email and password
export const signInUserWithEmailAndPassword = async (email,password)=>{
 return await signInWithEmailAndPassword(auth,email,password)
}

//add user to user database when user creates account or authenticates with third party services 
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

export const signUserOut = async ()=>{
  await signOut(auth)
}

export const subscribeToFirebaseAuthService = async (callbackFunction)=> {
 return await onAuthStateChanged(auth,callbackFunction)
}




export const saveCollectionsToDatabase = (collectionName,collectionData)=>{
  const collectionRef = collection(firestore,collectionName)
  // console.log(collectionRef)
    
  // saving collections to the database 
  const batch = writeBatch(firestore)
  collectionData.forEach(item => {
    const docRef = doc(collectionRef,item.title)
    // console.log(item)
    batch.set(docRef,item)  
  }) 
  
  batch.commit()
  
}


export const getCollectionDataFromFirebase = async (collectionName)=>{
  const collectionRef = collection(firestore,collectionName)
  
  
  const q = query(collectionRef)
  
  const querySnapshot = await getDocs(q)
  
  // const collectionData=  querySnapshot.docs.reduce((acc,docSnapshot)=>{
    
  
  //   const {items,title} =   docSnapshot.data()
    
  //   acc[title] = items
  //   return acc
  // }
  // ,{})
  
  const collectionData = querySnapshot.docs.map(docSnapshot=>docSnapshot.data())
  


  return collectionData
  
}



