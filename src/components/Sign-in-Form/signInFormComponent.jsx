import { useReducer } from "react";
import Input from "../input/inputComponent";
import './signinForm.styles.scss'


   const reducer = (state,action)=>{
        switch(action.type) {
            case "email":
                return {...state,email:action.payload}
                break
            case "password":
                return {...state,password:action.payload}
                break 
            default:
                return state
                break;
        }
    }
    
    const initialState={
        email:"",
        password:"",
    }

const SignInForm= ()=>{    
    const [state,dispatch] = useReducer(reducer,initialState)
    const {email,password} = state
   
    const handleChange =(e)=>{  
        dispatch({
            type:e.target.name,
            payload:e.target.value
        })
    }
    
    const handleSumbit =async (e)=>{
        e.preventDefault()
        
        if(!email || !password) {
            alert('Please enter your email and password')
            return
        }
    }


   
    return (
        <div className='sign-up-container'>
            <h2>Already Have an Account? Sign In</h2>
            <form action="#" onSubmit={handleSumbit}>
                <Input label={'Email'} handleChange={handleChange} name="email" value={email} type="email" required/>
                <Input label={'password'} handleChange={handleChange} name="password" type="password" value={password} required/>
                <button type="submit">Submit</button>
            </form>  
        </div>
    ) 
}

export default SignInForm