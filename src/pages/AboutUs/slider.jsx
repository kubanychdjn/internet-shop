import React, { useRef } from 'react';
import { MdOutlinePlayArrow } from "react-icons/md";


const Slider = () => {

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



        <div className="">
            <section className="">
                <div className="container">
                    <h4 className="main-title">Профессиональные спортсмены доверяют нам:</h4>
                    <div className="carousel-content">
                        <div className="carousel slider-container" ref={carousel}>
                            <div className="slider-block">
                                <img className="slider-img" src="https://sun9-4.userapi.com/s/v1/ig2/v-Hy9waJG0LXMy1_8MX3JuWlx9WDC8eoNZ-TcrwIAFLm4QOSbx3836hhRt71hspCi3gNQidiyzoRqIDSzd-npJjM.jpg?size=200x200&quality=96&crop=268,2,1063,1063&ava=1" alt="" />
                                <div className="descr-carousel">
                                    <h2 className='slider-name'>Иван Марков</h2>
                                    <p className='slider-status'>Чемпион мира по гиревому спорту</p>
                                    <p className='slider-description'>Качественные материалы, универсальность в выборе дизайна. Отличные плоские швы, выдерживает множество стирок и в целом замечательная одежда.</p>
                                </div>
                            </div>
                            <div className="slider-block">
                                <img className="slider-img" src="https://www.khl.ru/images/teamplayers/8498/4698.jpg    " alt="" />
                                <div className="descr-carousel">
                                    <h2 className='slider-name'>Павел Дацюк</h2>
                                    <p className='slider-status'>Чемпион России по хоккею</p>
                                    <p className='slider-description'>Качественные материалы, универсальность в выборе дизайна. Отличные плоские швы, выдерживает множество стирок и в целом замечательная одежда.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" slider-buttons">
                            <MdOutlinePlayArrow onClick={handleLeftClick} className="arrow-icon" />
                            <MdOutlinePlayArrow onClick={handleRightClick} className="arrow-icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slider;