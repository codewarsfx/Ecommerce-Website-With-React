import {loadStripe} from '@stripe/stripe-js'

export const stipeInstance= loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)
