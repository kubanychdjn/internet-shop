import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}
const Shorts = () => {
    const [shorts, setShorts] = useState([])

    useEffect(() => {
        handleGetPosts().then(res => setShorts(res.data))
    }, [])
    return (
        <div className="container">
            <div className="shirts-block">
                {
                    shorts.filter(short => short.type === "Shorts").map(short => (
                        <Link to={`/singleClothes/${short.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={short.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{short.price}</p>
                                <p className="main-clothes_title">{short.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Shorts;