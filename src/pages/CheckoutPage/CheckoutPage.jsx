import React from 'react';
import CheckoutForm from './CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = () => {
    // const stripePromise = loadStripe("pk_test_51LY447HWg33SQmOYkw5NDamYDIC6nmq6E8TuAzs8BFgEIOjFEhM8GjZxjolguoAhF07s5XgS346RXTd4Fx4xz9rX00cYDOothX")
    return (
        <div className='container'>
            <div className=""></div>



            {/* <Elements stripe={stripePromise}> */}
            {/* </Elements> */}
                <CheckoutForm />


        </div>
    );
};

export default CheckoutPage;