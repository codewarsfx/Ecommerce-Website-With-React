import SignInForm from "../../components/Sign-in-Form/signInFormComponent"
import SignUpForm from "../../components/Sign-Up-form/signUpForm"

import {AuthenticationController} from './authenticate.styles.jsx'


const Authenticate = ()=>{

    return(
        <AuthenticationController>
        <SignInForm/>
        <SignUpForm/>
        </AuthenticationController>
    )
}


export default Authenticate