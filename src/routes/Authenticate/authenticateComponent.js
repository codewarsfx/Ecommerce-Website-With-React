


import SignInForm from "../../components/Sign-in-Form/signInFormComponent"
import SignUpForm from "../../components/Sign-Up-form/signUpForm"

import './authenticate.styles.scss'





const Authenticate = ()=>{

    return(
        <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
   
        {/* <button onClick={SignInUser}>Sign In</button> */}
        </div>
    )
}


export default Authenticate