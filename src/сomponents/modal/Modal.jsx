import React from "react";
import style from "./Modal.module.css"
import {NavLink} from "react-router-dom";

const Modal = (props) => {
    let fields = props.fields.map((field) => {
            let type = "text";
            if (field === "почта") {
                type = "email";
            } else if (field === "пароль") {
                type = "password";
            }
            return <input type={type} placeholder={field}/>
        }
    )

    let classesWrapper;
    if (props.active) {
        classesWrapper = style.modal__wrapper + ' ' + style.active;
    } else {
        classesWrapper = style.modal__wrapper;
    }

    let classes;
    if (props.active) {
        classes = style.modal + ' ' + style.active;
    } else {
        classes = style.modal;
    }

    return (
        <div className={classesWrapper} onClick={() => props.setActive(false)}>
            <div className={classes} onClick={e => e.stopPropagation()}>
                <button className={style.exit} onClick={() => props.setActive(false)}></button>
                <h2>{props.title}</h2>
                <div className={style.modal__main}>
                    <form className={style.modal__inputs}>
                        {fields}
                    </form>
                    <div className={style.modal__links}>
                        <button onClick={props.firstLink}>{props.firstLink}</button>
                        <button>{props.secondLink}</button>
                    </div>
                </div>
                <NavLink to={"/account"} className={style.enter}
                         onClick={() => props.setActive(false)}>Войти</NavLink> {/* todo засунуть кнопку в тег формы */}
            </div>
        </div>
    )
}

export default Modal;