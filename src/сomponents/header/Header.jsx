import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <a href={""} className={style.logo}>
                <span>ф</span>
                <span>о</span>
                <span>т</span>
                <span>о</span>
                <span>с</span>
                <span>т</span>
                <span>о</span>
                <span>к</span>
            </a>
            <div className={style.space}></div>
            <nav className={style.nav}>
                <a href={""}>Популярное</a>
                <a href={""}>Найти</a>
                <a href={""}>Рейтинг</a>
                <a href={""}>Аукцион</a>
                <a href={""}>Войти</a>
            </nav>
        </header>
    )
}

export default Header;