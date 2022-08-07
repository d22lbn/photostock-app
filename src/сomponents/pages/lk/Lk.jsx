import React from "react";
import style from "./Lk.module.css"
import Block from "../../blocks/Block";
import {NavLink} from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Lk = (props) => {
    let prizes = props.state.prizes.map((prize) =>
        <div className={style.prize}>
            <img src={prize} alt={""}/>
        </div>
    )

    let photosPublished = props.state.published.map((photo) =>
        <NavLink to={""}>
            <img src={photo.img} alt={photo.name}/>
        </NavLink>
    )

    let photosPurchased = props.state.purchased.map((photo) =>
        <NavLink to={""}>
            <img src={photo.img} alt={photo.name}/>
        </NavLink>
    )

    return (
        <div>
            <Header/>
            <main className={style.main}>
                <div className={style.profile}>
                    <div className={style.ava}>
                        <img src={props.state.ava} alt={""}/>
                    </div>
                    <form className={style.information}>
                        <input type={"text"} placeholder={props.state.name}/>
                        <input type={"text"} placeholder={props.state.surname}/>
                        <input type={"text"} placeholder={props.state.age + " года"}/>
                        <input type={"text"} placeholder={props.state.email}/>
                        <input type={"text"} placeholder={props.state.password}/>
                    </form>
                    <div className={style.prizes}>
                        {prizes}
                    </div>
                    <span className={style.balance}>{props.state.balance} руб.</span>
                </div>
                <div className={style.account__photos}>
                    <div className={style.account__photos__title}>
                        <h3>Опубликованные</h3>
                        <button></button>
                    </div>
                    <div className={style.photos}>
                        {photosPublished}
                    </div>
                </div>
                <div className={style.account__photos}>
                    <div className={style.account__photos__title}>
                        <h3>Купленные</h3>
                    </div>
                    <div className={style.photos}>
                        {photosPurchased}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Lk;