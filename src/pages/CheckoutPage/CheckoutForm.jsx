import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
    const sum = useSelector(state => state.cart.sum)
    return (
        <div>
            <h2>Сумма оплаты: {sum}</h2>
            <div className="">
                <form className="card-Form">
                    <div className="">
                        <CardElement />
                    </div>
                    <button className='card-btn'> Оплатить</button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;