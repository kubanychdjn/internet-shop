import React from 'react';
import { Link } from 'react-router-dom';
import first from "../../../images/1.png"
import second from "../../../images/2.png"
import third from "../../../images/3.png"
import six from "../../../images/6.png"
import fourteen from "../../../images/16.png"
import fifteen from "../../../images/17.png"
import twenty from "../../../images/21.png"
import bag from "../../../images/bag.webp"
import sixteen from "../../../images/18.png"
import seventeen from "../../../images/19.png"
import { useState } from 'react';

const CategoryPage = () => {
    const [equipments] = useState([])

    return (
        <div className='container'>
            <div className="category-container">
                    <h6 className="main-title">Выберите категорию</h6>

                    <div className="category-container_menu">

                        <Link to="/t-shirts" className="category-container_box">

                            <h5 className="category-container_title">Футболки</h5>
                            <img className="main-img" src={first} alt="img" />
                        </Link>

                        <Link to="/shirts" className="category-container_box">

                            <h5 className="category-container_title">Майки</h5>
                            <img className="main-img" src={fourteen} alt="img" />
                        </Link>

                        <Link to="/rashguards" className="category-container_box">

                            <h5 className="category-container_title">Рашгарды</h5>
                            <img className="main-img" src={fifteen} alt="img" />
                        </Link>

                        <Link to="/leggings" className="category-container_box">

                            <h5 className="category-container_title">Леггинсы</h5>
                            <img className="main-img" src={sixteen} alt="img" />
                        </Link>

                        <Link to="/cycling" className="category-container_box">

                            <h5 className="category-container_title">Велосипедки</h5>
                            <img className="main-img" src={second} alt="img" />
                        </Link>

                        <Link to="/shorts" className="category-container_box">

                            <h5 className="category-container_title">Шорты</h5>
                            <img className="main-img" src={seventeen} alt="img" />
                        </Link>

                        <Link to="/shoes" className="category-container_box">

                            <h5 className="category-container_title">Обувь</h5>
                            <img className="main-img" src={third} alt="img" />
                        </Link>

                        <Link to="/bags" className="category-container_box">

                            <h5 className="category-container_title">Рюкзаки</h5>

                            <img className="main-img" src={bag} alt="img" />
                        </Link>


                        <Link to="/underwear" className="category-container_box">

                            <h5 className="category-container_title">Нижнее бельё</h5>
                            <img className="main-img" src={twenty} alt="img" />
                        </Link>
                    </div>

                    <div className="category-container-bot">


                        <Link to="/masks" className="masks-block">
                            <h4 className="main-title">Маски</h4>
                            <p className="category-descr">Медицинские с готовым <br />
                                и индивидуальным дизайном</p>
                            <div className="stay-buttons">
                                <button className="category-btn main-btn">Смотреть каталог</button>
                            </div>
                        </Link>
                        <img className="category-img" src={six} alt="" />

                    </div>
                    <div className="">
                    <div className="shirts-block">
                        
                                    {
                                        equipments.filter(equipment => equipment.type === "equipment").map(equipment => (
                                            <Link to={`/singleClothes/${equipment.id}`} className="clothes-box">
                                                <img className="clothes-mainImg" src={equipment.img} alt="" />
                                                <div className="clothes-infoBlock">
                                                    <p className="main-price">{equipment.price}</p>
                                                    <p className="main-clothes_title">{equipment.title}</p>
                                                </div>

                                            </Link>
                                        ))
                                    }
                                </div>
                    </div>


                

            </div>
        </div>
    );
};

export default CategoryPage;