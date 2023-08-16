import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    return (
        <div>
             <div className="">
                <form className="card-Form   ">
                    <div className="">
                    <CardElement style={{base: {fontSize: "18px", backgroudColor: "black"}}}/>
                    
                    </div>
                    <button className='card-btn'>Оплатить заказ</button>
                </form>
             </div>
        </div>
    );
};

export default CheckoutForm;