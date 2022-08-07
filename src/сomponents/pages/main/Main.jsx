import React from "react";
import style from "./Main.module.css"
import {NavLink} from "react-router-dom";

import Block from "../../blocks/Block";
import Header from "../../header/Header";

const Main = (props) => {
    let myBlocks = props.state.icons.map((icon) =>
        <Block id={icon.id} img={icon.img} mainPage={true} columnsNumber={4} withoutReference={true}/>
    );

    let myBlocksMobile = props.state.iconsMobile.map((icon) =>
        <Block id={icon.id} img={icon.img} mainPage={true} columnsNumber={2} withoutReference={true}/>
    );

    return (
        <div>
            <Header main={true}/>
            <main className={style.main}>
                <div className={style.desktop}>
                    <div className={style.search}></div>
                    <div className={style.blocks__wrapper}>
                        <div className={style.blocks}>
                            {myBlocks}
                        </div>
                    </div>
                </div>
                <div className={style.phone}>
                    <div className={style.search}></div>
                    <div className={style.blocks__wrapper}>
                        <div className={style.blocks}>
                            {myBlocksMobile}
                        </div>
                    </div>
                    <div className={style.menu}></div>
                </div>
                <div className={style.text}>
                    <h3>{props.state.title}</h3>
                    <NavLink to={"/search"}>Найти ></NavLink>
                </div>
            </main>
        </div>
    )
}

export default Main;