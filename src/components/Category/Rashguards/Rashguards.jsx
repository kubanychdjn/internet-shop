import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


const handleGetPosts = () => {
    return axios.get("http://localhost:3006/clothes")
}

const Rashguards = () => {


    const [shirts, setShirts] = useState([])


    useEffect(() => {
        handleGetPosts().then(res => setShirts(res.data))
    }, [])
    console.log(shirts)
    return (
        <div className="container">

            <div className="shirts-block">
                {
                    shirts.filter(shirt => shirt.type === "Rashguards").map(shirt => (
                        <Link to={`/singleClothes/${shirt.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={shirt.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{shirt.price}</p>
                                <p className="main-clothes_title">{shirt.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Rashguards;