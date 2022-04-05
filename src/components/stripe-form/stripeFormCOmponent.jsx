import { CardElement } from "@stripe/react-stripe-js";
import Button, { buttonTypes } from "../Button/buttonComponent";


import { StripeContainer } from "./stripeForm.styles";

const StripeForm = ()=>{
    return (
        <StripeContainer>
            <CardElement/>
            <Button buttonType={buttonTypes.inverted}>Pay</Button>
        </StripeContainer>
    )
}

export default StripeForm