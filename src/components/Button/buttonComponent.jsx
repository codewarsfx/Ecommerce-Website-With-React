import {Buttons,ButtonSpinner,GoogleSignInButton,InvertedButton} from './button.styles.jsx'

export const buttonTypes ={
    base:"base",
    google:"google-signin",
    inverted :"inverted"
}


const getButton =(buttonType)=>{
    
  return({
        [buttonTypes.base]:Buttons,
        [buttonTypes.google]: GoogleSignInButton,
        [buttonTypes.inverted]: InvertedButton
    }[buttonType])
    
}

    
   

const Button = ({children,buttonType,isLoading,...otherProps})=>{
    
    const ButtonType = getButton(buttonType)
    
    return (
        <ButtonType  disabled={isLoading} type="submit" {...otherProps}>{isLoading?<ButtonSpinner/> :children}</ButtonType>
    )

    }


export default Button