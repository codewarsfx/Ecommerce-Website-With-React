import {signInWIthGooglePopup,createUserDocument} from "../../Utils/firebase/firebaseUtils"


const SignIn = ()=>{
    
    const SignInUser =async (e)=>{
        
     const response=   await signInWIthGooglePopup()
      try{
         await createUserDocument(response.user)
      }
      catch(error){
          console.log('an error occured',error )
      }
    }
    
    
    return(
        <>
        <h1>Hello From Sign In</h1>
        <button onClick={SignInUser}>Sign In</button>
        </>
    )
}


export default SignIn