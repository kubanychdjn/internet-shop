import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    return (
        <div>
             <div className="">

                <div className="card-Form   ">
                    <div className="">
                    <CardElement style={{base: {fontSize: "18px"}}}/>
                    </div>
                    <button className='card-btn'>Оплатить заказ</button>
                </div>
             </div>
        </div>
    );
};

export default CheckoutForm;