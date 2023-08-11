import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}
const Underwear = () => {

    const [underWears, setUnderWears] = useState([])

    useEffect(() => {
        handleGetPosts().then(res => setUnderWears(res.data))
    }, [])
    return (
        <div className="container">
            <div className="shirts-block">
                {
                    underWears.filter(underWear => underWear.type === "Underwear").map(underWear => (
                        <Link to={`/singleClothes/${underWear.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={underWear.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{underWear.price}</p>
                                <p className="main-clothes_title">{underWear.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Underwear;