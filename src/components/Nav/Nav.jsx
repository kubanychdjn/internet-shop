import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../Context/Context";
import {MDBBtn} from "mdb-react-ui-kit";

const Nav = () => {
    const {user, dispatch} = useContext(Context)
    const [burger, setBurger] = useState(false)


    return (
        <div className="header-block">


            {
                burger
                    ?
                    <div className="header-navbar_active">
                        <ul className="header-menu_active">
                            <Link className="header-link" to="/">Главная</Link>
                            <Link className="header-link" to="/aboutUs">О нас</Link>
                            <Link className="header-link" to="/delivery">Доставка</Link>
                            <Link className="header-link" to="/payment">Оплата</Link>

                        </ul>
                        {
                            user ?
                                <div className="userTrue-active">
                                    <Link to="/profile" className="header-text_active">Почта: <span
                                        className="text-bold">{user.email}</span></Link>
                                    <Link to="/">
                                        <MDBBtn onClick={() => dispatch({type: "LOGIN_END"})}
                                                className='text-dark mdb-btn' color='light'>
                                            Выйти
                                        </MDBBtn>
                                    </Link>

                                </div>

                                :
                                <div className="header-loginBlock">
                                    <Link className="header-text" to="/register">Регистрация</Link>
                                    <Link className="header-text" to="/login">Войти</Link>
                                </div>


                        }

                    </div>
                    :
                    <nav className="header-navbar">

                        <div className="header-top">

                            <p className="header-text">Режим работы: 10.00-20.00</p>
                            <div className="header-tel">
                                <p className="header-text">Телефон: <span className="text-bold">(996)557-02-07-69</span>
                                </p>
                                <p className="header-text">Заказать обратный звонок</p>

                            </div>
                            {
                                user ?
                                    <div className="userTrue">
                                        <Link to="/profile" className="header-text">Почта: <span
                                            className="text-bold">{user.email}</span></Link>
                                        <Link to="/">
                                            <MDBBtn onClick={() => dispatch({type: "LOGIN_END"})}
                                                    className='text-dark mdb-btn' color='light'>
                                                Выйти
                                            </MDBBtn>
                                        </Link>

                                    </div>

                                    :
                                    <div className="header-loginBlock">
                                        <Link className="header-text" to="/register">Регистрация</Link>
                                        <Link className="header-text" to="/login">Войти</Link>
                                    </div>


                            }

                        </div>
                        <div className="header-bot">
                            <ul className="header-menu">
                                <Link className="header-link" to="/">Главная</Link>
                                <Link className="header-link" to="/aboutUs">О нас</Link>
                                <Link className="header-link" to="/delivery">Доставка</Link>
                                <Link className="header-link" to="/payment">Оплата</Link>
                                <Link className="header-link" to="/services">Услуги</Link>
                            </ul>
                            <div className="header-bot_info">
                                <p className="header-number"><span className="text-bold">(996)557-02-07-69</span></p>
                            </div>
                        </div>

                    </nav>


            }


            <div
                onClick={() => setBurger(!burger)}
                className={burger ? "burger-active" : "burger"}>

                <div
                    onClick={() => setBurger(false)}
                    className="burger-line">


                </div>
            </div>


        </div>
    )

};

export default Nav;