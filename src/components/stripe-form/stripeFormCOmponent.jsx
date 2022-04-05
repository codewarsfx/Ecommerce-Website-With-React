import { CardElement } from "@stripe/react-stripe-js";
import Button, { buttonTypes } from "../Button/buttonComponent";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";

import { StripeContainer } from "./stripeForm.styles";
import { selectCartItemsTotal } from "../../Redux/cart/cartSelector";
import { createUserSelector } from "../../Redux/user/userSelector";
import { useState } from "react";

const StripeForm = ()=>{
    const total = useSelector(selectCartItemsTotal)
    const user = useSelector(createUserSelector)
    const [isLoading,setIsloading] = useState(false)
     const stripe = useStripe()
        const elements = useElements()
        
     const submitHandler = async (e)=>{
           e.preventDefault()
           
           if(!stripe || !elements) return;
           
           setIsloading(true)

        const {data:{paymentIntent:{client_secret}}} = await  axios('.netlify/functions/create-payment-intent',{
            method:'post',
            data:{
                amount: total * 100
            }
        })
        
        
        const confirmPayment = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details:{
                    name:user.displayName?user.displayName:"Guest",
                }
            }
        })
        
        if(confirmPayment.error){
            console.log(confirmPayment.error)
            alert('an error occured')
        }
        
        else if(confirmPayment.paymentIntent.status==="succeeded"){
            alert("payment successful")
        }
      setIsloading(false)
    }
    

    return (
        <StripeContainer onSubmit={submitHandler}>
          
            <CardElement/>
            <Button isLoading={isLoading} buttonType={buttonTypes.inverted}>Pay</Button>
           
        </StripeContainer>
    )
}

export default StripeForm