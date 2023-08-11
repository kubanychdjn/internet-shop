import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../Context/Context";

const Footer = () => {

    const {user} = useContext(Context)
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer-left">
                        <ul className="footer-menu">
                            <Link to="/aboutUs" className="footer-link">О нас</Link>
                            <Link to="/delivery" className="footer-link">Доставка</Link>
                            <Link to="/payment" className="footer-link">Оплата</Link>
                            <Link to="/services" className="footer-link">Услуги</Link>
                        </ul>
                    </div>
                    <div className="footer-center">


                        <ul className="footer-menu">
                            <Link to="/t-shirts" className="footer-link">Футболки</Link>
                            <Link to="/shoes" className="footer-link">Обувь</Link>
                            <Link to="/masks" className="footer-link">Маски</Link>
                            <Link to="/cycling" className="footer-link">Велосипедки</Link>
                            <Link to="/bags" className="footer-link">Рюкзаки</Link>
                        </ul>
                    </div>

                    <div className="footer-center">


                        <ul className="footer-menu">
                            <Link to="/leggings" className="footer-link">Леггинсы</Link>
                            <Link to="/shorts" className="footer-link">Низ</Link>
                            <Link to="/shirts" className="footer-link">Майки</Link>
                            <Link to="/rashguards" className="footer-link">Рашгарды</Link>
                            <Link to="/underwear" className="footer-link">Бельё</Link>
                        </ul>
                    </div>

                    <div className="footer-right">
                        <p className="header-number">(996)557-02-07-69</p>
                        <Link className="footer-link" to="/profile">{user?.email}</Link>
                        <p className="header-text footer-text">Режим работы: 10.00-20.00

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;