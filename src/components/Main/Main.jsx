import React, { /*useRef*/ useState } from 'react';
import first from "../../images/1.png"
import second from "../../images/2.png"
import third from "../../images/3.png"
import four from "../../images/4.png"
import five from "../../images/5.png"
import six from "../../images/6.png"
import seven from "../../images/7.png"
import eight from "../../images/image 15.png"
import nine from "../../images/9.png"
import bag from "../../images/bag.webp"
import main1 from "../../images/main1.png"
import main2 from "../../images/main2.png"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import MainCarousel from './MainCarousel/MainCarousel';



const Main = () => {
   
    const [currentCategory, setCurrentCategory] = useState(0)


    // const carousel = useRef(null)
   
    // const handleLeftClick = e => {
    //     e.preventDefault()
    //     carousel.current.scrollLeft -= carousel.current.offsetWidth

    // }

   

    // const handleRightClick = e => {
    //     e.preventDefault()
    //     carousel.current.scrollLeft += carousel.current.offsetWidth

    // }


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=АНИМАЦИИ-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    const textAnimation = {
        hidden: custom => ({
            x: -100,
            opacity: 0,
            transition: { delay: custom * 0.3 }


        }),
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }
        })
    }

    const sectionAnimation = {
        hidden: custom => ({
            y: -50,
            transition: { delay: custom * 0.2 }


        }),
        visible: custom => ({
            y: 0,
            transition: { delay: custom * 0.2 }
        })
    }

    const categoryAnimation = {
        hidden: custom => ({
            x: -50,
            transition: { delay: custom * 0.1 }
        }),
        visible: custom => ({
            x: 0,
            transition: { delay: custom * 0.1 }
        })
    }
    const chooseUsAnimation = {
        hidden: custom => ({
            x: 70,
            transition: { delay: custom * 0.1 }
        }),
        visible: custom => ({
            x: 0,
            transition: { delay: custom * 0.1 }
        })
    }
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-      
    
    return (
        <main>
            <section className="CarouselSection">
                    <MainCarousel/>
            </section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                className={currentCategory !== 0 ? "mainScreen_active" : "mainScreen"}>
                <div className="container">
                    <div className="mainScreen-block">
                        <div className="mainScreen-info">

                            <motion.h1 custom={1} variants={textAnimation} className="mainScreen-title">3=2</motion.h1>
                            <motion.p custom={2} variants={textAnimation} className="main-title">Закажи три футболки, <br />
                                а заплати только за две</motion.p>
                            <button onClick={() => setCurrentCategory()} className="mainScreen-btn main-btn"><Link to='/t-shirts'>Перейти в
                                каталог</Link> 
                            </button>

                        </div>

                        <div className="mainScreen-shirts">
                            <img className="mainScreen-img" src={main1} alt="" />
                            <img className="mainScreen-img" src={main2} alt="" />
                            <img className="mainScreen-img" src={main1} alt="" />
                        </div>

                    </div>

                </div>

            </motion.section>
            
            <section className={currentCategory !== 0 ? "find-active " : "find"}>
                <div className="container">
                    <h2 className="main-title">Что вы ищите?</h2>

                    <motion.div className="main-block">

                        <motion.div className="main-box"
                        variants={categoryAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        >
                            <Link to="/t-shirts" >
                                <p className="main-box_title">Верх</p>
                                <p className="main-box_descr">Футболки, майки </p>
                                <img className="main-img" src={first} alt="" />
                            </Link>
                        </motion.div>
                        <motion.div className="main-box"
                        variants={categoryAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        >
                            <Link to="/cycling" >
                                <p className="main-box_title">Низ</p>
                                <p className="main-box_descr">Велосипедки, леггинсы</p>
                                <img className="main-img" src={second} alt="" />
                            </Link>
                        </motion.div>
                        <motion.div className="main-box"
                        variants={categoryAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        >
                            <Link to="/shoes" >
                                <p className="main-box_title">Обувь</p>
                                <p className="main-box_descr">Штангетки</p>
                                <img className="main-img" src={third} alt="" />
                            </Link>
                        </motion.div>
                        <motion.div className="main-box"
                        variants={categoryAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        >
                            <Link to="/bags" >

                                <h5 className="main-box_title">Рюкзаки</h5>
                                <p className="main-box_descr">Рюкзаки для путешествий <br /> и для комфорта</p>
                                <img className="main-img" src={bag} alt="img" />
                            </Link>
                        </motion.div>
                        <motion.div className="main-box"
                        variants={categoryAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        >

                            <motion.div onClick={() => setCurrentCategory(2)} >
                                <p className="main-box_title">Экипировка</p>
                                <p className="main-box_descr">Ремни для гиревого спорта <br />
                                    и тяжелоатлетические </p>
                                <img className="main-img" src={five} alt="" />
                            </motion.div>
                        </motion.div>
                        <motion.div className="main-box"
                        variants={categoryAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        >
                            <Link to="/masks" >
                                <p className="main-box_title">Маски</p>
                                <p className="main-box_descr">Медицинские с готовым <br />
                                    и индивидуальным дизайном</p>
                                <img className="main-img" src={six} alt="" />
                            </Link>
                        </motion.div>














                    </motion.div>
                    <motion.div

                        initial={{ y: -50, transition: '2.5' }}
                        whileInView={{ y: 0, transition: '2.5' }}

                        className="main-bot_box">
                        <div

                            className="main-bot_left">

                            <h3 className="main-bot_title">Командная форма на заказ</h3>
                            <p className="main-bot_text">Разрабатываем дизайн и шьём на заказ футбольную, волейбольную, <br />
                                гиревую форму, а также тяжелоатлетические костюмы <br />
                                и гимнастические купальники.</p>
                            <ul className="main-menu">
                                <li className="main-bot_link">Нанесения логотипа</li>
                                <li className="main-bot_link">Печать номера и фамилии</li>
                                <li className="main-bot_link">Разработка дизайна формы</li>

                            </ul>
                            <button className="main-bot_btn">Узнать подробнее</button>
                        </div>

                        <div className="main-bot_right">
                            <img className="main-bot_img" src={seven} alt="" />
                        </div>


                    </motion.div>
                </div>
            </section>
            <motion.section className="popular section-box">
                <div className="container">
                    <h3 className="main-title">Популярные товары</h3>
                    <div className="popular-row">

                        <motion.div variants={sectionAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={1} className="popular-box">
                            <img className="popular-img" src={four} alt="" />
                            <button className="popular-btn"> Осталось 3 шт.</button>
                            <button className="popular-btn_first"> Скидка 10%</button>
                            <div className="popular-box_bot">
                                <p>Магнезия жесткая <span className="main-price">750 ₽ </span></p>
                                <button className="popular-bot_btn">В корзину</button>
                            </div>

                        </motion.div>
                        <motion.div variants={sectionAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={2} className="popular-box">
                            <img src={eight} className="popular-img" alt="" />
                            <button className="popular-btn"> Бесплатная доставка</button>
                            <div className="popular-box_bot">
                                <p>Маска для лица <span className="main-price">150 ₽ </span></p>
                                <button className="popular-bot_btn">В корзину</button>

                            </div>
                        </motion.div>
                        <motion.div variants={sectionAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={3} className="popular-box">
                            <img src={nine} className="popular-img" alt="" />
                            <button className="popular-btn"> Скидка 10%</button>
                            <div className="popular-box_bot">
                                <p>Женская футболка... <span className="main-price">950 ₽ </span></p>
                                <button className="popular-bot_btn">В корзину</button>

                            </div>
                        </motion.div>
                    </div>
                </div>

            </motion.section>
           
            <motion.section className="chooseUs ">
                <div className="container">
                    <h5 className="main-title">Что вы получаете выбирая нас:</h5>
                    <div className="choose-block">
                        <div className="choose-block_left">
                            <motion.div 
                            variants={chooseUsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            className="choose-box">
                                <h6 className="choose-title">
                                    Высокое качество
                                </h6>
                                <p className="main-text">
                                    Каждое изделие кроится, отшивается и проверяется вручную.
                                </p>
                            </motion.div>
                            <motion.div
                            variants={chooseUsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            className="choose-box">
                                <h6 className="choose-title">Гарантию</h6>
                                <p className="main-text">
                                    Мы гарантируем, что наши изделия <span
                                        className="text-bold">выдержат 50 стирок</span>
                                    и не потеряет цвет и форму.
                                </p>
                            </motion.div>
                            <motion.div
                            variants={chooseUsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                            className="choose-box">
                                <h6 className="choose-title">Точность размера</h6>
                                <p className="main-text">
                                    Размеры соответствуют размерной сетке, т.к. <span className="text-bold">отшиваются по собственным лекалам.</span>
                                </p>
                            </motion.div>
                        </div>
                        <div className="choose-block_right">

                            <motion.div
                            variants={chooseUsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            className="choose-box">
                                <h6 className="choose-title">
                                    Помощь дизайнера
                                </h6>
                                <p className="main-text">
                                    Помощь в разработке дизайна, доработка существующего макета.
                                </p>
                            </motion.div>
                            <motion.div
                            variants={chooseUsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            className="choose-box">
                                <h6 className="choose-title">Быстрая доставка</h6>
                                <p className="main-text">
                                    Доставляем по всему миру,
                                    отправка вашего заказа
                                    в течение 1 дня.
                                </p>
                            </motion.div>
                            <motion.div 
                            variants={chooseUsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                            className="choose-box">
                                <h6 className="choose-title">Сервис</h6>
                                <p className="main-text">
                                    Лёгкий процесс оплаты, обмена и возврата заказа.
                                </p>
                            </motion.div>
                        </div>

                    </div>

                </div>

            </motion.section>
            <section className="stayQuestions">
                <div className="container">
                    <div className="stayQuestions-block">
                        <h6 className="main-title">Остались вопросы?</h6>
                        <p className="stay-descr">Заполните форму и менеджер свяжется с вами в ближайшее время.</p>
                        <div className="stay-buttons">
                            <motion.button initial={{x: 0}} whileInView={{x: -20}}  className="stayQuestions-btn main-btn">Задать вопрос</motion.button>
                            <motion.button initial={{x: 0}} whileInView={{x: 20}}  className="stayQuestions-btn main-btn">Заказать звонок</motion.button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;