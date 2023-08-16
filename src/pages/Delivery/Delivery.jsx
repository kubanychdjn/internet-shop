import React from 'react';
import { motion } from 'framer-motion';


const Delivery = () => {

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
    const circleAnimation = {
        hidden: custom => ({
            y: -100,
            opacity: 0,
            transition: { delay: custom * 0.3 }


        }),
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }
        })
    }
    return (
        <motion.div initial="hidden" whileInView='visible' className="">
            <div className="delivery-container">
                <div className='container'>
                    <div className="deliver-edit_box">
                        <h2 className='delivery-title'> Доставка</h2>
                        <motion.div  initial="hidden" whileInView='visible' className="delivery-title_box">
                            <motion.p custom={1} variants={textAnimation} className='delivery-title_descr'><p className='delivery-circle'> </p>В пределах России и по всему миру</motion.p>
                            <motion.p custom={2} variants={textAnimation}  className='delivery-title_descr'> <p className='delivery-circle'></p>Отправка заказа на следующий день</motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="delivery-services">
                <div className="container">
                    <motion.div initial="hidden" whileInView='visible' className="delivery-services_box">
                        <motion.p variants={circleAnimation} className='delivery-big_circle'></motion.p>
                        <div className="">
                            <motion.h3 custom={1} variants={textAnimation} className='delivery-service-title'>ПОЧТА РОССИИ </motion.h3>
                            <motion.p custom={2} variants={textAnimation} className='delvery-services_descr'>Сроки доставки от 5 рабочих дней <br /> <br /> Пересылка до востребования <br /> <br /> Стоимость доставки: от 400руб, <br />от удаленности и количевства изделий</motion.p>
                        </div>
                    </motion.div>
                    <motion.div className="delivery-services_box">
                        <motion.p variants={circleAnimation} className='delivery-big_circle'></motion.p>
                        <div className="">
                            <motion.h3 custom={3} variants={textAnimation} className='delivery-service-title'>СДЭК ДО ДВЕРИ</motion.h3>
                            <motion.p custom={4} variants={textAnimation} className='delvery-services_descr'>Сроки доставки: 1-5 рабочих дней <br /><br />Стоимость доставки: от 350 руб <br /> в зависимости от  удаленности </motion.p>
                        </div>
                    </motion.div>
                    <motion.div className="delivery-services_box">
                        <motion.p variants={circleAnimation} className='delivery-big_circle'></motion.p>
                        <div className="">
                            <motion.h3 custom={5} variants={textAnimation} className='delivery-service-title'>СДЭК САМОВЫВОЗ</motion.h3>
                            <motion.p custom={6} variants={textAnimation} className='delvery-services_descr'>Сроки доставки: 1-5 рабочих дней <br /> <br /> Стоимость доставки от 350руб <br /> в зависимости от удаленности </motion.p>
                        </div>
                        
                    </motion.div></div>
            </div>
        </motion.div>

    );
};

export default Delivery;