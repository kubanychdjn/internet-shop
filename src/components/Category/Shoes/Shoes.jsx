import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}
const Shoes = () => {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        handleGetPosts().then(res => setShoes(res.data))
    }, [])

    return (
        <div className="container">
            <div className="shirts-block">
                {
                    shoes.filter(shoes => shoes.type === "Shoes").map(shoes => (
                        <Link to={`/singleClothes/${shoes.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={shoes.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{shoes.price}</p>
                                <p className="main-clothes_title">{shoes.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Shoes;