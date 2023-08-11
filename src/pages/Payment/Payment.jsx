import React from 'react';

const Payment = () => {
    return (
        <div className="payment-container">
            <div className='container'>
                <div className="payment-box">
                    <h2 className="payment-title">Оплата заказа</h2>    
                </div>
                <div className="payment-edit_box">
                        <p className='payment-big_circle'></p>
                        <div className="">
                            <h3 className='payment-service-title'>ПЕРЕВОД НА КАРТУ </h3>
                            <p className='payment-services_descr'>Оперативный и простой способ. Мы сообщаем <br /> номер карты, на который необходимо сделать <br /> перевод.</p>
                        </div>
                    </div>
                    <div className="payment-edit_box">
                        <p className='payment-big_circle'></p>
                        <div className="">
                            <h3 className='payment-service-title'>ОНЛАЙН-ПЛАТЕЖИ ЧЕРЕЗ САЙТ</h3>
                            <p className='payment-services_descr'>При оформлении заказа в корзине возможно <br /> выбрать онлайн-оплату и оплатить заказ.</p>
                        </div>
                    </div>
                    <div className="payment-edit_box">
                        <p className='payment-big_circle'></p>
                        <div className="">
                            <h3 className='payment-service-title'>ОПЛАТА ПО СЧЕТУ</h3>
                            <p className='payment-services_descr'>Мы направим вам реквизиты и счет для оплаты <br /> по запросу, оплату можно произвести через <br /> любой банк.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Payment;