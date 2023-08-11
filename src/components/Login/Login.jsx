import React, {useContext, useState} from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";
import {Context} from "../Context/Context";
import swal from "sweetalert";
import Main from "../Main/Main";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, dispatch} = useContext(Context)


    const handleLogin = async (e) => {
        try {
            dispatch({type: "LOGIN_START"})
            e.preventDefault()
            const res = await axios.post("http://localhost:3006/login", {
                email,
                password,
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.user})
            swal("Good job!", "Авторизация прошла успешно", "success");
            setEmail("")
            setPassword("")
        }
        catch  {
            dispatch({type: "LOGIN_FAILURE"})
            // alert("Ошибка при авторизации")
            swal ( "Oops" ,  "Ошибка при авторизации" ,  "error" )
            // swal ( "Oops" ,  ""  )
        }


    }
    return (
        <div className="container">
            {
                user ? <Main/>
                :             <form onSubmit={e => handleLogin(e)} className="main-form">
                        <h4 className="form-title">Войти</h4>

                        <div className="form-block">
                            <p className="form-infoText">Введите ваш Email: </p>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                type="text" className="form-inp" placeholder="email"/>

                            <p className="form-infoText">Введите пароль: </p>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                type="password" className="form-inp" placeholder="password"/>


                            <MDBBtn className="form-btn" type="submit" color='dark'>
                                Войти
                            </MDBBtn>
                        </div>


                    </form>


            }

        </div>
    );
};

export default Login;