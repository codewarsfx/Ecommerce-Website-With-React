import {Buttons,GoogleSignInButton,InvertedButton} from './button.styles.jsx'

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

    
   

const Button = ({children,buttonType,...otherProps})=>{
    
    const ButtonType = getButton(buttonType)
    
    return (
        <ButtonType type="submit" {...otherProps}>{children}</ButtonType>
    )

    }


export default Button