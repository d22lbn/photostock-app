import React from "react";
import style from "./Lk.module.css"
import {NavLink} from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import {
    changeAgeActionCreator, changeEmailActionCreator,
    changeNameActionCreator, changePasswordActionCreator,
    changeSurnameActionCreator,
    updateAgeActionCreator, updateEmailActionCreator,
    updateNameActionCreator, updatePasswordActionCreator,
    updateSurnameActionCreator
} from "../../../redux/lk-reducer";

const Lk = (props) => {
console.log("AAA")
    console.log(props)

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


    let changedName = () => {
        props.dispatch(changeNameActionCreator());
    }
    let onNameChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNameActionCreator(text));
    }

    let changedSurname = () => {
        props.dispatch(changeSurnameActionCreator());
    }
    let onSurnameChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateSurnameActionCreator(text));
    }

    let changedAge = () => {
        props.dispatch(changeAgeActionCreator());
    }
    let onAgeChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateAgeActionCreator(text));
    }

    let changedEmail = () => {
        props.dispatch(changeEmailActionCreator());
    }
    let onEmailChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateEmailActionCreator(text));
    }

    let changedPassword = () => {
        props.dispatch(changePasswordActionCreator());
    }
    let onPasswordChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePasswordActionCreator(text));
    }


    let balance = (number) => {
        number = String(number)
        number = number.split("").reverse().join("");
        let balance = '';
        for (let i = 0; i < number.length; i++) {
            if (i % 3 === 0 && i > 0) {
                balance += ' ';
            }
            balance += number[i];
        }
        return balance.split("").reverse().join("");
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
                                   onChange={onNameChange}/>
                            <input type={"text"} placeholder={props.state.surname} value={props.state.newSurname}
                                   onChange={onSurnameChange}/>
                            <input type={"text"} placeholder={props.state.age + " ????????"} value={props.state.newAge}
                                   onChange={onAgeChange}/>
                            <input type={"text"} placeholder={props.state.email} value={props.state.newEmail}
                                   onChange={onEmailChange}/>
                            <input type={"text"} placeholder={props.state.password} value={props.state.newPassword}
                                   onChange={onPasswordChange}/>
                        </div>
                        <button type={"button"} onClick={() => {
                            changedName();
                            changedSurname();
                            changedAge();
                            changedEmail();
                            changedPassword();
                        }} className={style.save}>
                            <div>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                                <span>??</span>
                            </div>
                        </button>
                    </form>
                    <div className={style.prizes}>
                        {prizes}
                    </div>
                    <span className={style.balance}>{balance(props.state.balance)} ???</span>
                </div>
                <div className={style.account__photos}>
                    <div className={style.account__photos__title}>
                        <h3>????????????????????????????</h3>
                        <button></button>
                    </div>
                    <div className={style.photos}>
                        {photosPublished}
                    </div>
                </div>
                <div className={style.account__photos}>
                    <div className={style.account__photos__title}>
                        <h3>??????????????????</h3>
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