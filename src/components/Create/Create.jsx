import React, {useState} from 'react';
import axios from "axios";
import {MDBBtn} from "mdb-react-ui-kit";

const Create = () => {
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [img2, setImg2] = useState("")
    const [img3, setImg3] = useState("")
    const [img4, setImg4] = useState("")
    const [descr, setDescr] = useState("")
    const [price, setPrice] = useState("")
    const [genre, setGenre] = useState("")
    const [type, setType] = useState("")
    const [size, setSize] = useState("")
    const [altImg, setAltImg] = useState("")
    const [altImg2, setAltImg2] = useState("")
    const [altImg3, setAltImg3] = useState("")
    const [altImg4, setAltImg4] = useState("")
    const [aboutThing, setAboutThing] = useState("")

    const handleCreatePosts = (e) => {
        e.preventDefault()
        axios.post(" http://localhost:3006/clothes", {
            title,
            descr,
            img,
            img2,
            img3,
            img4,
            price,
            size,
            genre,
            type,
            altImg,
            altImg2,
            altImg3,
            altImg4,
            aboutThing
        })
        setTitle("")
        setDescr("")
        setImg("")
        setImg2("")
        setImg3("")
        setImg4("")
        setPrice("")
        setAltImg("")
        setAltImg2("")
        setAltImg3("")
        setAltImg4("")
        setAboutThing("")
    }
    return (
        <div className="create">
            <div className="container">
                <form className="createPost-form" onSubmit={(e) => handleCreatePosts(e)}>
                    <h3 className="form-title">Добавить</h3>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        type="text" className="create-inp" placeholder="title"/>
                    <input
                        value={descr}
                        onChange={e => setDescr(e.target.value)}
                        type="text" className="create-inp" placeholder="descr"/>
                    <input
                        value={img}
                        onChange={e => setImg(e.target.value)}
                        required
                        type="text" className="create-inp" placeholder="img"/>
                    <input
                        value={img2}
                        onChange={e => setImg2(e.target.value)}
                        type="text" className="create-inp" placeholder="img2"/>
                    <input
                        value={img3}
                        onChange={e => setImg3(e.target.value)}
                        type="text" className="create-inp" placeholder="img3"/>
                    <input
                        value={img4}
                        onChange={e => setImg4(e.target.value)}
                        type="text" className="create-inp" placeholder="img4"/>

                    <input
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        type="text" className="create-inp" placeholder="price"/>
                    <input
                        value={size}
                        onChange={e => setSize(e.target.value)}
                        type="text" className="create-inp" placeholder="size"/>

                    <input
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                        type="text" className="create-inp" placeholder="genre"/>

                    <input
                        value={type}
                        onChange={e => setType(e.target.value)}
                        type="text" className="create-inp" placeholder="type"/>
                    <input
                        value={altImg}
                        onChange={e => setAltImg(e.target.value)}
                        type="text" className="create-inp" placeholder="altImg"/>

                    <input
                        value={altImg2}
                        onChange={e => setAltImg2(e.target.value)}
                        type="text" className="create-inp" placeholder="altImg2"/>

                    <input
                        value={altImg3}
                        onChange={e => setAltImg3(e.target.value)}
                        type="text" className="create-inp" placeholder="altImg3"/>

                    <input
                        value={altImg4}
                        onChange={e => setAltImg4(e.target.value)}
                        type="text" className="create-inp" placeholder="altImg4"/>

                    <textarea
                        className="create-inp single-textArea"
                        value={aboutThing}
                        onChange={e => setAboutThing(e.target.value)}
                    placeholder="aboutThing">
                        Описание товара
                    </textarea>

                    <MDBBtn type="submit" color='dark'>
                        Добавить
                    </MDBBtn>
                </form>
            </div>

        </div>
    );
};

export default Create;