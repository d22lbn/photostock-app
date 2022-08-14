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


    let newName = React.createRef();
    let changedName = () => {
        props.changedName();
    }
    let onNameChange = () => {
        let text = newName.current.value;
        props.updateName(text);
    }


    let newSurname = React.createRef();
    let changedSurname = () => {
        props.changedSurname();
    }
    let onSurnameChange = () => {
        let text = newSurname.current.value;
        props.updateSurname(text);
    }

    return (
        <div>
            <Header/>
            <main className={style.main}>
                <div className={style.profile}>
                    <div className={style.ava}>
                        <img src={props.state.ava} alt={""}/>
                    </div>
                    <form className={style.information}>
                        <div className={style.information__inputs}>
                            <input type={"text"} placeholder={props.state.name} value={props.state.newName}
                                   onChange={onNameChange} ref={newName}/>
                            <input type={"text"} placeholder={props.state.surname} value={props.state.newSurname}
                                   onChange={onSurnameChange} ref={newSurname}/>
                            <input type={"text"} placeholder={props.state.age + " года"}/>
                            <input type={"text"} placeholder={props.state.email}/>
                            <input type={"text"} placeholder={props.state.password}/>
                        </div>
                        <button type={"button"} onClick={() => {changedName(); changedSurname()}} className={style.save}>
                            <div>
                                <span>с</span>
                                <span>о</span>
                                <span>х</span>
                                <span>р</span>
                                <span>а</span>
                                <span>н</span>
                                <span>и</span>
                                <span>т</span>
                                <span>ь</span>
                            </div>
                        </button>
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