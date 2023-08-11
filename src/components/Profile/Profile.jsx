import React, {useContext} from 'react';
import {Context} from "../Context/Context";
import {Link} from "react-router-dom";
const Profile = () => {
    const {user} = useContext(Context)
    return (
        <div className="container">
            <div className="profile-block">
                <div className="profile-left">
                    <img className="profile-img" src={user?.img} alt=""/>

                </div>

                <div className="profile-right">
                    <p className="form-infoText">Ваш Email:  </p>
                    <p className="profile-info">{user?.email}</p>
                    <p className="form-infoText">Статус: </p>
                    {
                        user?.isAdmin  ? <div className=""><h2 className="profile-info">Админ</h2>  <Link to="/create" className="profile-info"><button  className="profile-btn main-btn" style={{marginTop: 20}}>Админ Панель</button></Link> </div> : <p className="profile-info">Пользователь</p>
                    }
                    <Link className="profile-info" to="/cart">Корзина</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;