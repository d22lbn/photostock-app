import React from "react";
import style from "./Main.module.css"
import Block from "../blocks/Block";
import BlockMobile from "../blocks/BlockMobile";

const Main = () => {
    const blocks = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
    ]

    let myBlocks = blocks.map((block) =>
        <Block id={block.id}/>
    );

    let myBlocksMobile = blocks.map((block) =>
        <BlockMobile id={block.id}/>
    );

    return (
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
                <h3>Размещайте и приобретайте красивые фотографии в несколько кликов</h3>
            </div>
        </main>
    )
}

export default Main;