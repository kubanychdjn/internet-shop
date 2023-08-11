import React, {useEffect, useRef, useState} from 'react';
import first from "../../images/1.png"
import second from "../../images/2.png"
import third from "../../images/3.png"
import four from "../../images/4.png"
import five from "../../images/5.png"
import six from "../../images/6.png"
import seven from "../../images/7.png"
import eight from "../../images/image 15.png"
import nine from "../../images/9.png"
import eleven from "../../images/11.png"
import twelve from "../../images/12.png"
import thirteen from "../../images/13.png"
import fourteen from "../../images/16.png"
import fifteen from "../../images/17.png"
import twenty from "../../images/21.png"
import bag from "../../images/bag.webp"
import sixteen from "../../images/18.png"
import seventeen from "../../images/19.png"
import {MdOutlinePlayArrow} from "react-icons/md";
import main1 from "../../images/main1.png"
import main2 from "../../images/main2.png"
import {BsArrowDown, BsBasket} from "react-icons/bs";
import {FaArrowLeft} from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";


const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}

const Main = () => {
    const [equipments, setEquipments] = useState([])
    const [currentCategory, setCurrentCategory] = useState(0)

    const carousel = useRef(null)
    useEffect(() => {
        handleGetPosts().then(res => setEquipments(res.data))
    }, [])

    const handleLeftClick = e => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    const handleChangeCategory = (index) => {
        setCurrentCategory(index);
        console.log(index)
    }

    const handleRightClick = e => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }

    return (
        <main>
            <section className="category">
                <div className="container">
                    <div className="category-block">


                        {

                            currentCategory !== 0
                                ?
                                <div className="category-tabs">

                                    <div
                                        className={currentCategory === 0 ? "category-box_active" : "category-box"}
                                        onClick={() => setCurrentCategory(0)}>
                                        <FaArrowLeft/>
                                    </div>

                                    <div
                                        onClick={() => handleChangeCategory(1)}
                                        className={currentCategory === 1 ? "category-box_active" : "category-box"}>
                                        <h4 className="category-title">Каталог одежды</h4>
                                        <BsArrowDown className="arrow-icon_active"/>
                                    </div>


                                    <div
                                        className={currentCategory === 2 ? "category-box_active" : "category-box"}
                                        onClick={() => handleChangeCategory(2)}>
                                        <h4 className="category-title">Экипировка</h4>
                                    </div>


                                    <div
                                        className={currentCategory === 4 ? "category-box_active" : "category-box"}
                                        onClick={() => handleChangeCategory(4)}>
                                        <Link to="/cart" className="category-title">Корзина</Link>
                                        <BsBasket className="basket"/>
                                    </div>
                                </div>
                                :
                                <div className="category-tabs">
                                    <div
                                        onClick={() => handleChangeCategory(1)}
                                        className={currentCategory === 1 ? "category-box_active" : "category-box"}>
                                        <h4 className="category-title">Каталог одежды</h4>
                                        <BsArrowDown/>
                                    </div>


                                    <div
                                        className={currentCategory === 2 ? "category-box_active" : "category-box"}
                                        onClick={() => handleChangeCategory(2)}>
                                        <h4 className="category-title">Экипировка</h4>
                                    </div>


                                    <Link
                                        to="/cart"
                                        className={currentCategory === 4 ? "category-box_active" : "category-box"}
                                        onClick={() => handleChangeCategory(4)}>
                                        <h5 className="category-title">Корзина</h5>
                                        <BsBasket className="basket"/>
                                    </Link>


                                </div>
                        }


                        <div className="category-container">

                            <div className={currentCategory === 1 ? "category-content_active" : "category-content"}>

                                <h6 className="main-title">Выберите категорию</h6>

                                <div className="category-container_menu">

                                    <Link to="/t-shirts" className="category-container_box">

                                        <h5 className="category-container_title">Футболки</h5>
                                        <img className="main-img" src={first} alt="img"/>
                                    </Link>

                                    <Link to="/shirts" className="category-container_box">

                                        <h5 className="category-container_title">Майки</h5>
                                        <img className="main-img" src={fourteen} alt="img"/>
                                    </Link>

                                    <Link to="/rashguards" className="category-container_box">

                                        <h5 className="category-container_title">Рашгарды</h5>
                                        <img className="main-img" src={fifteen} alt="img"/>
                                    </Link>

                                    <Link to="/leggings" className="category-container_box">

                                        <h5 className="category-container_title">Леггинсы</h5>
                                        <img className="main-img" src={sixteen} alt="img"/>
                                    </Link>

                                    <Link to="/cycling" className="category-container_box">

                                        <h5 className="category-container_title">Велосипедки</h5>
                                        <img className="main-img" src={second} alt="img"/>
                                    </Link>

                                    <Link to="/shorts" className="category-container_box">

                                        <h5 className="category-container_title">Шорты</h5>
                                        <img className="main-img" src={seventeen} alt="img"/>
                                    </Link>

                                    <Link to="/shoes" className="category-container_box">

                                        <h5 className="category-container_title">Обувь</h5>
                                        <img className="main-img" src={third} alt="img"/>
                                    </Link>

                                    <Link to="/bags" className="category-container_box">

                                        <h5 className="category-container_title">Рюкзаки</h5>

                                        <img className="main-img" src={bag} alt="img"/>
                                    </Link>


                                    <Link to="/underwear" className="category-container_box">

                                        <h5 className="category-container_title">Нижнее бельё</h5>
                                        <img className="main-img" src={twenty} alt="img"/>
                                    </Link>
                                </div>

                                <div className="category-container-bot">


                                    <Link to="/masks" className="masks-block">
                                        <h4 className="main-title">Маски</h4>
                                        <p className="category-descr">Медицинские с готовым <br/>
                                            и индивидуальным дизайном</p>
                                        <div className="stay-buttons">
                                            <button className="category-btn main-btn">Смотреть каталог</button>
                                        </div>
                                    </Link>
                                    <img className="category-img" src={six} alt=""/>

                                </div>


                            </div>

                            <div className={currentCategory === 2 ? "category-content_active" : "category-content"}>
                                <div className="shirts-block">
                                    {
                                        equipments.filter(equipment => equipment.type === "equipment").map(equipment => (
                                            <Link to={`/singleClothes/${equipment.id}`} className="clothes-box">
                                                <img className="clothes-mainImg" src={equipment.img} alt=""/>
                                                <div className="clothes-infoBlock">
                                                    <p className="main-price">{equipment.price}</p>
                                                    <p className="main-clothes_title">{equipment.title}</p>
                                                </div>

                                            </Link>
                                        ))
                                    }
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className={currentCategory !== 0 ? "mainScreen_active" : "mainScreen"}>
                <div className="container">
                    <div className="mainScreen-block">
                        <div className="mainScreen-info">

                            <h1 className="mainScreen-title">3=2</h1>
                            <p className="main-title">Закажи три футболки, <br/>
                                а заплати только за две</p>
                            <button onClick={() => setCurrentCategory(1)} className="mainScreen-btn main-btn">Перейти в
                                каталог
                            </button>

                        </div>

                        <div className="mainScreen-shirts">
                            <img className="mainScreen-img" src={main1} alt=""/>
                            <img className="mainScreen-img" src={main2} alt=""/>
                            <img className="mainScreen-img" src={main1} alt=""/>
                        </div>

                    </div>

                </div>

            </section>
            <section className={currentCategory !== 0 ? "find-active " : "find"}>
                <div className="container">
                    <h2 className="main-title">Что вы ищите?</h2>

                    <div className="main-block">

                        <Link to="/t-shirts" className="main-box">
                            <p className="main-box_title">Верх</p>
                            <p className="main-box_descr">Футболки, майки </p>
                            <img className="main-img" src={first} alt=""/>
                        </Link>

                        <Link to="/cycling" className="main-box">
                            <p className="main-box_title">Низ</p>
                            <p className="main-box_descr">Велосипедки, леггинсы</p>
                            <img className="main-img" src={second} alt=""/>
                        </Link>

                        <Link to="/shoes" className="main-box">
                            <p className="main-box_title">Обувь</p>
                            <p className="main-box_descr">Штангетки</p>
                            <img className="main-img" src={third} alt=""/>
                        </Link>

                        <Link to="/bags" className="main-box">

                            <h5 className="main-box_title">Рюкзаки</h5>
                            <p className="main-box_descr">Рюкзаки для путешествий <br/> и для комфорта</p>
                            <img className="main-img" src={bag} alt="img"/>
                        </Link>

                        <div onClick={() => setCurrentCategory(2)} className="main-box">
                            <p className="main-box_title">Экипировка</p>
                            <p className="main-box_descr">Ремни для гиревого спорта <br/>
                                и тяжелоатлетические </p>
                            <img className="main-img" src={five} alt=""/>
                        </div>

                        <Link to="/masks" className="main-box">
                            <p className="main-box_title">Маски</p>
                            <p className="main-box_descr">Медицинские с готовым <br/>
                                и индивидуальным дизайном</p>
                            <img className="main-img" src={six} alt=""/>
                        </Link>

                        <div className="main-bot_box">
                            <div className="main-bot_left">

                                <h3 className="main-bot_title">Командная форма на заказ</h3>
                                <p className="main-bot_text">Разрабатываем дизайн и шьём на заказ футбольную, волейбольную, <br/>
                                    гиревую форму, а также тяжелоатлетические костюмы <br/>
                                    и гимнастические купальники.</p>
                                <ul className="main-menu">
                                    <li className="main-bot_link">Нанесения логотипа</li>
                                    <li className="main-bot_link">Печать номера и фамилии</li>
                                    <li className="main-bot_link">Разработка дизайна формы</li>

                                </ul>
                                <button className="main-bot_btn">Узнать подробнее</button>
                            </div>

                            <div className="main-bot_right">
                                <img className="main-bot_img" src={seven} alt=""/>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
            <section className="popular section-box">
                <div className="container">
                    <h3 className="main-title">Популярные товары</h3>
                    <div className="popular-row">

                        <div className="popular-box">
                            <img className="popular-img" src={four} alt=""/>
                            <button className="popular-btn"> Осталось 3 шт.</button>
                            <button className="popular-btn_first"> Скидка 10%</button>
                            <div className="popular-box_bot">
                                <p>Магнезия жесткая <span className="main-price">750 ₽ </span></p>
                                <button className="popular-bot_btn">В корзину</button>
                            </div>

                        </div>
                        <div className="popular-box">
                            <img src={eight} className="popular-img" alt=""/>
                            <button className="popular-btn"> Бесплатная доставка</button>
                            <div className="popular-box_bot">
                                <p>Маска для лица <span className="main-price">150 ₽ </span></p>
                                <button className="popular-bot_btn">В корзину</button>

                            </div>
                        </div>
                        <div className="popular-box">
                            <img src={nine} className="popular-img" alt=""/>
                            <button className="popular-btn"> Скидка 10%</button>
                            <div className="popular-box_bot">
                                <p>Женская футболка... <span className="main-price">950 ₽ </span></p>
                                <button className="popular-bot_btn">В корзину</button>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="ourWorks ">
                <div className="container">
                    <h4 className="main-title">Примеры наших работ:</h4>
                    <div className="carousel-content">
                        <div className="carousel" ref={carousel}>
                            <img className="carousel-img" src={eleven} alt=""/>
                            <img className="carousel-img" src={twelve} alt=""/>
                            <img className="carousel-img" src={thirteen} alt=""/>
                            <img className="carousel-img" src={eleven} alt=""/>
                            <img className="carousel-img" src={twelve} alt=""/>
                            <img className="carousel-img" src={thirteen} alt=""/>

                        </div>
                        <div className="carousel-buttons">
                            <MdOutlinePlayArrow onClick={handleLeftClick} className="arrow-icon"/>
                            <MdOutlinePlayArrow onClick={handleRightClick} className="arrow-icon"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="chooseUs ">
                <div className="container">

                    <h5 className="main-title">Что вы получаете выбирая нас:</h5>

                    <div className="choose-block">
                        <div className="choose-block_left">

                            <div className="choose-box">
                                <h6 className="choose-title">
                                    Высокое качество
                                </h6>
                                <p className="main-text">
                                    Каждое изделие кроится, отшивается и проверяется вручную.
                                </p>
                            </div>
                            <div className="choose-box">
                                <h6 className="choose-title">Гарантию</h6>
                                <p className="main-text">
                                    Мы гарантируем, что наши изделия <span
                                    className="text-bold">выдержат 50 стирок</span>
                                    и не потеряет цвет и форму.
                                </p>
                            </div>
                            <div className="choose-box">
                                <h6 className="choose-title">Точность размера</h6>
                                <p className="main-text">
                                    Размеры соответствуют размерной сетке, т.к. <span className="text-bold">отшиваются по собственным лекалам.</span>
                                </p>
                            </div>
                        </div>
                        <div className="choose-block_right">

                            <div className="choose-box">
                                <h6 className="choose-title">
                                    Помощь дизайнера
                                </h6>
                                <p className="main-text">
                                    Помощь в разработке дизайна, доработка существующего макета.
                                </p>
                            </div>
                            <div className="choose-box">
                                <h6 className="choose-title">Быстрая доставка</h6>
                                <p className="main-text">
                                    Доставляем по всему миру,
                                    отправка вашего заказа
                                    в течение 1 дня.
                                </p>
                            </div>
                            <div className="choose-box">
                                <h6 className="choose-title">Сервис</h6>
                                <p className="main-text">
                                    Лёгкий процесс оплаты, обмена и возврата заказа.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className="stayQuestions">
                <div className="container">
                    <div className="stayQuestions-block">
                        <h6 className="main-title">Остались вопросы?</h6>
                        <p className="stay-descr">Заполните форму и менеджер свяжется с вами в ближайшее время.</p>
                        <div className="stay-buttons">
                            <button className="stayQuestions-btn main-btn">Задать вопрос</button>
                            <button className="stayQuestions-btn main-btn">Заказать звонок</button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;