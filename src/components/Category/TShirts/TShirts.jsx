import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const handleGetClothes = async () => {
     return axios.get("http://localhost:3006/clothes")
}
const TShirts = () => {
    const [clothes, setClothes] = useState([])


    useEffect(() => {
        handleGetClothes().then(res => setClothes(res.data))
    }, [])
    return (
        <div className="container">
            <div className="tShirts">
                <div className="t-shirts_links">
                    <Link to="/">Главная/  Каталог одежды/</Link>
                    <Link to="/t-shirts">Футболки</Link>
                </div>


            </div>
            <div className="tShirts-block">
                {
                    clothes.filter(clothing => clothing.type === "T-Shirts").map(clothing => (
                        <Link to={`/singleClothes/${clothing.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={clothing.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{clothing.price}</p>
                                <p className="main-clothes_title">{clothing.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default TShirts;