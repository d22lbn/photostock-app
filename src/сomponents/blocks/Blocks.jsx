import React from "react";
import style from "./Blocks.module.css";

import Block from "./Block";

const Blocks = (props) => {
    let myBlocks = props.imgArr.map((photo) =>
        <Block id={photo.id} name={photo.name} img={photo.img} mainPage={false} columnsCount={props.columnsCount}/>
    );

    return (
        <div className={style.blocks__wrapper}>
            <div className={style.blocks}>
                {myBlocks}
            </div>
        </div>
    )
}

export default Blocks;