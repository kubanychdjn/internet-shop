import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';


const CheckoutPage = () => {
    const products = useSelector(state => state.cart.productsCart)
    const sum = useSelector(state => state.cart.sum)


    const stripePromise = loadStripe('pk_test_51LY447HWg33SQmOYkw5NDamYDIC6nmq6E8TuAzs8BFgElOjFEhM8GjZxjoIguoAhF07s5XgS346RXTd4Fx4xz9rX00cYDOothX');

    return (
        <div className='container'>
            <div className="Checkout-box">
                <div className="">
                    <div className="">
                        <div className="Checkout-title"><h2 className=''>Оформление заказа</h2></div>

                        <form className='UserData-form'>
                            <h3>Данные покупателя</h3>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Имя</label>
                            </div>

                            <div className="group">
                                <input type="email" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Почта</label>
                            </div>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Телефонный Номер</label>
                            </div>

                        </form>
                    </div>
                    <div className="">
                        <form className='UserAdress-form'>
                            <h3>Адрес получателя</h3>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Страна</label>
                            </div>

                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Город</label>
                            </div>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Улица</label>
                            </div>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Дом</label>
                            </div>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Квартира</label>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="Pay-box">
                    <h2 className='payBox-title'>Ваш заказ</h2>
                    <div className="payBox-descr">
                        <p>Товар</p>
                        <p>Всего</p>
                    </div>
                    {products.map((product) => (
                        <div className="payBox-descr">
                            <p>{product.title} </p>
                            <p>{product.quantity} / {product.price}</p>
                        </div>
                    ))}
                    <h2 className='payBox-title payBox-colorBGC'>Итоговая стовимость: {sum}</h2>
                    <div className="">
                        <p>Способ оплаты:</p>


                        <div className="">
                            <div className="pay-Block">
                                <input type="radio" className='pay-inp' name='pay-tipe' /> Наличными
                                <input type="radio" className='pay-inp' name='pay-tipe' /> Оплата картой
                            </div>
                        </div>
                            <form className="">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm/>
                                </Elements>
                            </form>
                    </div>
                </div>
            </div>


            {/* <CheckoutForm /> */}
        </div>
    );
};

export default CheckoutPage;