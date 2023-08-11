import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}
const Leggings = () => {

    const [leggings, setLeggings] = useState([])

    useEffect(() => {
        handleGetPosts().then(res => setLeggings(res.data))
    }, [])
    console.log(leggings)
    return (
        <div className="container">
            <div className="shirts-block">

                {
                    leggings.filter(legging => legging.type === "Leggins").map(legging => (
                        <Link to={`/singleClothes/${legging.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={legging.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{legging.price}</p>
                                <p className="main-clothes_title">{legging.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Leggings;