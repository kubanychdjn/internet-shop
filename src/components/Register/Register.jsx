import React, {useContext, useState} from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";
import {Context} from "../Context/Context";
import Main from "../Main/Main";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [img, setImg] = useState("")
    const [isAdmin, setIsAdmin] = useState(1)
    const {user, dispatch} = useContext(Context)

    const handleRegister = async (e) => {
        dispatch({type: "LOGIN_START"})
        e.preventDefault()
        const res = await axios.post("http://localhost:3006/register", {
            email,
            password,
            img,
            isAdmin
        })
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.user})
        setEmail("")
        setPassword("")
        setIsAdmin("")
        setImg("")
    }

    return (

        <div className="register">
            <div className="container">
                {
                    user ? <Main/>
                    :
                        <form onSubmit={e => handleRegister(e)} className="main-form">
                        <h4 className="form-title">Регистрация</h4>

                        <div className="form-block">
                            <p className="form-infoText">Введите ваш Email: </p>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                type="text" className="form-inp" placeholder="email"/>

                            <p className="form-infoText">Придумайте пароль: </p>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                type="password" className="form-inp" placeholder="password"/>

                            <p className="form-infoText">Добавьте фото: </p>
                            <input
                                value={img}
                                onChange={e => setImg(e.target.value)}
                                required
                                type="text" className="form-inp" placeholder="img"/>

                            <MDBBtn className="form-btn" type="submit" color='dark'>
                                Зарегистрироваться
                            </MDBBtn>
                        </div>


                    </form>

                }
            </div>
        </div>
    );
};

export default Register;