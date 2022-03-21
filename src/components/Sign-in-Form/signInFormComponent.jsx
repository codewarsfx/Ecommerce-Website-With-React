import { useReducer } from "react";




import {signInWIthGooglePopup,createUserDocument,signInUserWithEmailAndPassword} from "../../Utils/firebase/firebaseUtils"
import Button,{buttonTypes} from "../Button/buttonComponent";
import Input from "../input/inputComponent";
import './signinForm.styles.scss'


   const initialState={
        email:"",
        password:"",
    }
    
   const reducer = (state,action)=>{
        switch(action.type) {
            case "email":
                return {...state,email:action.payload}
           
            case "password":
                return {...state,password:action.payload}
            case "clear":
                return initialState
            default:
                return state
        }
    }
    
 

const SignInForm= ()=>{   
    
    //sate management using reducer
    const [state,dispatch] = useReducer(reducer,initialState)
    const {email,password} = state

    //handle input change
    const handleChange =(e)=>{  
        dispatch({
            type:e.target.name,
            payload:e.target.value
        })
    }
    
    //handle form submit
    const handleSumbit =async (e)=>{
        e.preventDefault()
        if(!email || !password) {
            alert('Please enter your email and password')
            return
        }
        try{
            const response = await signInUserWithEmailAndPassword(email,password)
      
            console.log(response)
        }catch(error){
            console.log(error)
        }
              dispatch({
            type:'clear'
        })
    
    }
    
    //handle sign in with google
    const SignInUserWithGoogle =async (e)=>{

      try{
        const response= await signInWIthGooglePopup()
         createUserDocument(response.user)  
      }
      catch(error){
          if(error.code==="auth/popup-closed-by-user"){
              alert('please sign into your google account via popup')
          }
          console.log('an error occured',error )
      }
    }
    
    return (
        <div className='sign-in-container'>
            <h2>Already Have an Account? Sign In</h2>
            <form action="#" onSubmit={handleSumbit}>
                <Input label={'Email'} handleChange={handleChange} name="email" value={email} type="email" required/>
                <Input label={'password'} handleChange={handleChange} name="password" type="password" value={password} required/>
                <div className="button-group">
                <Button>Sign In</Button>
                <Button buttonType={buttonTypes.google} type='button'  onClick={SignInUserWithGoogle}>Sign In With Google</Button>
                </div>
            </form>  
        </div>
    ) 
}

export default SignInForm