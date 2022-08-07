import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log()
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
                <NavLink to={"/enter"}>Войти</NavLink>
            </nav>
        </header>
    )
}

export default Header;