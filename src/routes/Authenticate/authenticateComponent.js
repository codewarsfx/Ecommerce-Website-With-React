import SignInForm from "../../components/Sign-in-Form/signInFormComponent"
import SignUpForm from "../../components/Sign-Up-form/signUpForm"

import './authenticate.styles.scss'


const Authenticate = ()=>{

    return(
        <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
        </div>
    )
}


export default Authenticate