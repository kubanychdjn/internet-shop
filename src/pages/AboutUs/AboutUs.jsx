import React, { useRef, } from "react";
import Gigga from "../../images/aboutus/image 28.png";
import eleven from "../../images/11.png"
import twelve from "../../images/12.png"
import thirteen from "../../images/13.png"
import { MdOutlinePlayArrow } from "react-icons/md";
import Slider from "../AboutUs/slider"
import { motion } from 'framer-motion';


const AboutUs = () => {
  const carousel = useRef(null)


  const handleLeftClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth

  }

  const handleRightClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth

  }


  const textAnimation  = {
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
  const imageAnimation  = {
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
    <div className="AU-container">
      <div className="box">
        <div className="container">
          <motion.h2 initial={{y: -100, opacity: 0 }} whileInView={{y: 0, opacity: 1}} className="AU-name AU-title">О компании</motion.h2>
        </div>
      </div>


      <motion.div
      initial="hidden"
      whileInView="visible"
      className="container AU-box">
        <div className="">
          <motion.p custom={1} variants={textAnimation} className="AU-text">
            Наша компания была основана в 2019 году, официальным лицом компании и
            идейным вдохновитель является - Иван Марков, четырехкратный абсолютный
            чемпион мира в дисциплине гиревого спорта.
          </motion.p>
          <motion.h3 custom={2} variants={textAnimation} className="AU-title">Наша цель:</motion.h3>
          <motion.p custom={3} variants={textAnimation} className="AU-text">
            Создание комфортной, высокотехнологичной, практичной экипировки для спорта.
          </motion.p>

        </div>
        <img src={Gigga} alt="gacchi mucchi men" className="AU-img" />
      </motion.div>
      <div className="box AU-editbox-container">
        <div className="container">
          <div className="AU-title_marg">
            <h3 className="AU-title">Особенности нашей одежды</h3>
          </div>
          <motion.div initial="hidden" whileInView='visible' className="AU-cont">
            <div className="AU-editbox">
              <motion.img custom={1} variants={imageAnimation} className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <motion.p custom={1} variants={textAnimation} className="AU-text">Долговечность, стойкость к изнашиванию за счет применения специальных материалов и методов печати выдерживают 50 стирок.</motion.p>
            </div>
            <div className="AU-editbox">
              <motion.img custom={2} variants={imageAnimation} className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <motion.p custom={2} variants={textAnimation} className="AU-text">Соответствие высоким качественным стандартам, правилам игры и требованиям спортивных федераций.</motion.p>
            </div>
            <div className="AU-editbox">
              <motion.img custom={3} variants={imageAnimation} className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <motion.p custom={3} variants={textAnimation} className="AU-text">Яркие цвета, красочное оформление, сохраняющее свой привлекательный вид, независимо от интенсивности использования</motion.p>
            </div>
            <div className="AU-editbox">
              <motion.img custom={4} variants={imageAnimation} className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <motion.p custom={4} variants={textAnimation} className="AU-text">Высокая эргономичность, легкость, повышающая скоростные качества спортсменов</motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <Slider />
      <section className="">
        <div className="container">
          <h4 className="main-title">Примеры наших работ:</h4>
          <div className="carousel-content">
            <div className="carousel" ref={carousel}>
              <img className="carousel-img" src={eleven} alt="" />
              <img className="carousel-img" src={twelve} alt="" />
              <img className="carousel-img" src={thirteen} alt="" />
              <img className="carousel-img" src={eleven} alt="" />
              <img className="carousel-img" src={twelve} alt="" />
              <img className="carousel-img" src={thirteen} alt="" />

            </div>
            <div className="carousel-buttons">
              <MdOutlinePlayArrow onClick={handleLeftClick} className="arrow-icon" />
              <MdOutlinePlayArrow onClick={handleRightClick} className="arrow-icon" />
            </div>
          </div>
        </div>
      </section>

    </div>


  );
};

export default AboutUs;
