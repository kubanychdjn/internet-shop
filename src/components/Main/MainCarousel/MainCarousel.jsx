import React, { /*useContext,*/ useEffect,  useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from 'react-bootstrap/Carousel';
// import { Context } from '../../Context/Context';


const fetchSlider = () => {
    return axios.get(`http://localhost:3006/sliders`).then((res) => res.data);
};

const MainCarousel = () => {
    const [slider, setSlider] = useState([]);

    // const { user } = useContext(Context);



   
    useEffect(() => {
      fetchSlider().then((data) => setSlider(data));
    }, []);
    // 
    

    return (
        
        <div>

            <Carousel className="carousel-container">
                {slider.map((el) => {
                    return (
                        <Carousel.Item interval="1000">
                            
                                <img
                                    className="Main_carousel-img"
                                    src={el.sliderImg}
                                    alt="First slide"
                                />
                            
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>

            
        </div>
    );
};

export default MainCarousel;