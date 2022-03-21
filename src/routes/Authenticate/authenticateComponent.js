

import {signInWIthGooglePopup,createUserDocument} from "../../Utils/firebase/firebaseUtils"

import SignInForm from "../../components/Sign-in-Form/signInFormComponent"
import SignUpForm from "../../components/Sign-Up-form/signUpForm"

import './authenticate.styles.scss'





const Authenticate = ()=>{
    
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
        <div className='authentication-container'>
        <SignUpForm/>
        <SignInForm/>
        {/* <button onClick={SignInUser}>Sign In</button> */}
        </div>
    )
}


export default Authenticate