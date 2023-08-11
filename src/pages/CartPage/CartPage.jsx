import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductFromCart } from '../../redux/cartSlice';

const CartPage = () => {
    const products = useSelector(state => state.cart.productsCart)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    
    const handleDeleteClick = (productId) => {
        dispatch(deleteProductFromCart(productId))
    }

    // const btsn  = e => {
    //     console.log(products); 

    // }

    return (

        <div className="cartContainer">
            <div className="container">
            <div className="">{products.length === 0 && <h3>Корзина пуста</h3>}</div>
            <div   className=''>
                
                <div className="cartDescr-Block">
                    <p className='product-descr'>Фото </p>
                    <p className="product-descr">Название</p>
                    <p className="product-descr">Цена</p>
                    <p  className="product-descr">Количество</p>
                    <p className="product-descr">Общая сумма</p>
                </div>
                {products.map((product) => (
                    <div className="">
                        <div className="">
                            <div className="cartBlock" key={product.id}>
                                <img className='cartProduct-img' src={product.img} alt="cart-img" />
                                <p className='cartDescr'>{product.title}</p>
                                <p className='cartDescr'>{product.price}</p>
                                <div className="quantity-wrapper">
                                    <button className='quantity-btn' onClick={() =>  quantity > 1 && setQuantity(quantity - 1)}>-</button>
                                <p className=''>{product.quantity}</p>
                                    <button className='quantity-btn' onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <p className='cartDescr'>{product.quantity * product.price}</p>
                                <img className='cartDelete-btn' src="https://cdn-icons-png.flaticon.com/512/1483/1483063.png" onClick={() => {handleDeleteClick(product.id)}} alt="" />
                            </div>
                        </div>
                    </div>


                ))}
                            <Link to="/checkout">
                            <button className='cart-btn'>Оформить заказ</button>
                            
                            </Link>

            </div>
        </div>
        </div>
    );
};

export default CartPage;