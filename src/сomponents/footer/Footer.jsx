import React from "react";
import style from "./Footer.module.css"

const Footer = (props) => {

    return (
        <footer className={style.footer}>
            <span className={style.footer__symbol}>©</span>
            <span>ma4ikxin</span>
            <span>, 2022-2022</span>
        </footer>
    )
}

export default Footer;