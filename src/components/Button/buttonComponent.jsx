import './button.styles.scss'

   export const buttonTypes ={
        google:"google-sign-in",
        inverted:"inverted"
    }

const Button = ({children,buttonType,...otherProps})=>{
    
    
    return(
        <button type='submit' className={`button-container ${buttonType}`} {...otherProps}>{children}</button>
    )
    
    }


export default Button