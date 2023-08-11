/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import {MDBBtn} from "mdb-react-ui-kit";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';


const handleGetSingleClothes = async id => {
    return axios.get(` http://localhost:3006/clothes/${id}`)
}
const SingleClothes = () => {
    const [clothing, setClothing] = useState([])
    const {id} = useParams()
    const [toggleState, setToggleState] = useState(false)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        handleGetSingleClothes(id).then(res => setClothing(res.data))
    },[]);

    
    console.log(clothing)
    return (
        <div className="singleClothes">
            <div className="container">
                <div className="single-block">
                    <div className="single-left-block">
                        {/*<a data-fancybox="gallery" data-src={game.img} data-width="800" data-height="600">*/}
                        {/*    <img className="singleGame-miniImg" src={game.img} alt=""/>*/}
                        {/*</a>*/}
                        <div className={toggleState === false ? "single-left_active" : "single-left"}>

                            <a data-fancybox="gallery" data-src={clothing?.img} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.img} alt=""/>
                            </a>

                            <a data-fancybox="gallery" data-src={clothing?.img2} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.img2} alt=""/>

                            </a>

                            <a data-fancybox="gallery" data-src={clothing?.img3} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.img3} alt=""/>

                            </a>

                            <a data-fancybox="gallery" data-src={clothing?.img4} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.img4} alt=""/>
                            </a>

                            <p className="single-aboutThing">{clothing.aboutThing}</p>

                        </div>

                        <div className={toggleState === true ? "single-left_active" : "single-left"}>
                            <a data-fancybox="gallery1" data-src={clothing?.altImg} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.altImg} alt=""/>
                            </a>

                            <a data-fancybox="gallery1" data-src={clothing?.altImg2} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.altImg2} alt=""/>
                            </a>

                            <a data-fancybox="gallery1" data-src={clothing?.altImg3} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.altImg3} alt=""/>
                            </a>

                            <a data-fancybox="gallery1" data-src={clothing?.altImg4} data-width="800" data-height="700">
                                <img className="single-img" src={clothing?.altImg4} alt=""/>
                            </a>

                            <p>{clothing.aboutThing}</p>

                        </div>
                    </div>
                    <div className="single-right">
                        <h4 className="single-title">{clothing.title}</h4>
                        <p>{clothing.descr}</p>
                        <p className="single-price">Цена: {clothing.price}c</p>

                        <p className="single-size">Размеры: {clothing.size}</p> 
                        <p className="single-size">Пол: {clothing.genre}</p>

                        <div className="single-circleBlock">
                            <div onClick={() => setToggleState(false)}
                                 className="singleCircleBox">
                                <img className="single-circleImg" src={clothing.img} alt=""/>


                            </div>
                            <div onClick={() => setToggleState(true)}
                                 className="singleCircleBox">
                                <img className="single-circleImg" src={clothing.altImg} alt=""/>

                            </div>
                        </div>
                        <div className="quantity">
                            <button className='quantity-control' onClick={() =>  quantity > 1 && setQuantity(quantity - 1)}> - </button>
                            <p>{quantity}</p>
                            <button className='quantity-control' onClick={() => setQuantity(quantity + 1)}> + </button>
                        </div>
                        <MDBBtn className="mdb-btn" type="submit" color='dark' onClick={() => dispatch(addToCart({...clothing, quantity}))}>
                            Добавить в корзину
                        </MDBBtn>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default SingleClothes;