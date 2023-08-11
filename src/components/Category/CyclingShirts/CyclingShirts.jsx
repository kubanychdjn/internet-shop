import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const handleGetPosts = () => {    
    return axios.get("http://localhost:3006/clothes")
}


const CyclingShirts = () => {
    const [cyclings, setCyclings] = useState([])
    

    useEffect(() => {
        handleGetPosts().then(res => setCyclings(res.data))
    }, [])
    
    return (
        <div className="container">
            <div className="shirts-block">
                {
                    cyclings.filter(cycling => cycling.type === "Cycling").map(cycling => (
                        <Link to={`/singleClothes/${cycling.id}`} className="clothes-box">
                            <img className="clothes-mainImg" src={cycling.img} alt=""/>
                            <div className="clothes-infoBlock">
                                <p className="main-price">{cycling.price}</p>
                                <p className="main-clothes_title">{cycling.title}</p>
                            </div>

                        </Link>
                    ))
                }
            </div>


        </div>
    );
};

export default CyclingShirts;