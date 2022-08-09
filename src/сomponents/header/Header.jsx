import React, {useState} from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import Modal from "../modal/Modal";

const Header = (props) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <header className={style.header}>
            <NavLink to={"/"} className={props.main ? style.logo__main : style.logo}>
                <span>ф</span>
                <span>о</span>
                <span>т</span>
                <span>о</span>
                <span>с</span>
                <span>т</span>
                <span>о</span>
                <span>к</span>
            </NavLink>
            <div className={style.space}></div>
            <nav className={style.nav}>
                <NavLink to={"/popular"}>Популярное</NavLink>
                <NavLink to={"/search"}>Найти</NavLink>
                <NavLink to={"/rating"}>Рейтинг</NavLink>
                <NavLink to={"/auction"}>Аукцион</NavLink>
                <button onClick={() => setModalActive(true)}>Войти</button>
            </nav>

            <Modal
                active={modalActive}
                setActive={setModalActive}
                title={"Авторизация"}
                fields={['почта', 'пароль']}
                firstLink={'регистрация'}
                secondLink={'забыли пароль'}
            />
        </header>
    )
}

export default Header;