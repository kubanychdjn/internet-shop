import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}
const Bags = () => {

    const [bags, setBags] = useState([])

    useEffect(() => {
        handleGetPosts().then(res => setBags(res.data))
    }, [])
    return (
        <div className="container">
            <div className="shirts-block">
                {
                    bags.filter(bag => bag.type === "Bags").map(bag => (
                        <Link to={`/singleClothes/${bag.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={bag.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{bag.price}</p>
                                <p className="main-clothes_title">{bag.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Bags;