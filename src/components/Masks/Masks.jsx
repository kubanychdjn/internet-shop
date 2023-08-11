import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}
const Masks = () => {


    const [masks, setMasks] = useState([])

    useEffect(() => {
        handleGetPosts().then(res => setMasks(res.data))
    }, [])
    return (
        <div className="container">
            <div className="shirts-block">
                {
                    masks.filter(mask => mask.type === "Masks").map(mask => (
                        <Link to={`/singleClothes/${mask.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={mask.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{mask.price}</p>
                                <p className="main-clothes_title">{mask.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Masks;