import React, { useRef, } from "react";
import Gigga from "../../images/aboutus/image 28.png";
import eleven from "../../images/11.png"
import twelve from "../../images/12.png"
import thirteen from "../../images/13.png"
import { MdOutlinePlayArrow } from "react-icons/md";
import Slider from "../AboutUs/slider"

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
  return (
    <div className="AU-container">
      <div className="box">
        <div className="container">
          <h2 className="AU-name AU-title">О компании</h2>
        </div>
      </div>


      <div className="container AU-box">
        <div className="">
          <p className="AU-text">
            Наша компания была основана в 2019 году, официальным лицом компании и
            идейным вдохновитель является - Иван Марков, четырехкратный абсолютный
            чемпион мира в дисциплине гиревого спорта.
          </p>
          <h3 className="AU-title">Наша цель:</h3>
          <p className="AU-text">
            Создание комфортной, высокотехнологичной, практичной экипировки для спорта.
          </p>

        </div>
        <img src={Gigga} alt="gacchi mucchi men" className="AU-img" />
      </div>
      <div className="box AU-editbox-container">
        <div className="container">
          <div className="AU-title_marg">
            <h3 className="AU-title">Особенности нашей одежды</h3>
          </div>
          <div className="AU-cont">
            <div className="AU-editbox">
              <img className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <p className="AU-text">Долговечность, стойкость к изнашиванию за счет применения специальных материалов и методов печати выдерживают 50 стирок.</p>
            </div>
            <div className="AU-editbox">
              <img className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <p className="AU-text">Соответствие высоким качественным стандартам, правилам игры и требованиям спортивных федераций.</p>
            </div>
            <div className="AU-editbox">
              <img className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <p className="AU-text">Яркие цвета, красочное оформление, сохраняющее свой привлекательный вид, независимо от интенсивности использования</p>
            </div>
            <div className="AU-editbox">
              <img className="AU-img2" src="https://phonoteka.org/uploads/posts/2022-09/1663650401_2-phonoteka-org-p-galochka-bez-fona-oboi-3.png" alt="" />
              <p className="AU-text">Высокая эргономичность, легкость, повышающая скоростные качества спортсменов</p>
            </div>
          </div>
        </div>
      </div>

      <Slider />
      <section className="">
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
