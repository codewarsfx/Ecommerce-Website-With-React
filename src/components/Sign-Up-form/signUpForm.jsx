import { useReducer } from "react";
import {signUpwithUserNameandPassord,createUserDocument} from '../../Utils/firebase/firebaseUtils'
import Input from "../input/inputComponent";
import './signUpForm.styles.scss'


   const reducer = (state,action)=>{
        switch(action.type) {
            case "displayName":
                return {...state,displayName:action.payload}
                break
            case "email":
                return {...state,email:action.payload}
                break
            case "password":
                return {...state,password:action.payload}
                break
            case "confirmPassword":
                return {...state,confirmPassword:action.payload}  
            default:
                return state
                break;
        }
    }
    
    const initialState={
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    }

const SignUpForm= ()=>{    
    const [state,dispatch] = useReducer(reducer,initialState)
    const {displayName,email,password,confirmPassword} = state
   
    const handleChange =(e)=>{  
        dispatch({
            type:e.target.name,
            payload:e.target.value
        })
    }
    
    const handleSumbit =async (e)=>{
        e.preventDefault()
        
        if(confirmPassword !== password) {
            alert('Password and confirm paswwords dont match')
            return
        }
        
        try{
            const response = await signUpwithUserNameandPassord(email,password)
            createUserDocument(response.user,{displayName})
            
        }catch(error){
            if(error.code ==='auth/email-already-in-use'){
                alert('Email already in Use by another user')
            }
            console.log(error)
        }
    }


   
    return (
        <div className='sign-up-container'>
            <h2>Don't Have an Account? Sign Up</h2>
            <form action="#" onSubmit={handleSumbit}>
                <Input label={'Name'} handleChange={handleChange} name="displayName" value={displayName} type="text" required/>
                <Input label={'Email'} handleChange={handleChange} name="email" value={email} type="email" required/>
                <Input label={'password'} handleChange={handleChange} name="password" type="password" value={password} required/>
                <Input label={'confirmPassword'} handleChange={handleChange} name="confirmPassword" value={confirmPassword} type="password" required/>
                <button type="submit">Submit</button>
            </form>  
        </div>
    ) 
}

export default SignUpForm