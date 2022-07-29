import React from "react";
import style from "./Block.module.css"

import dog from "../../res/dog.png"

const BlockMobile = (props) => {
    let myGridArea = "";

    switch (props.id % 5) {
        case 0:
            myGridArea = "1 / 1 / 2 / 2";
            break;
        case 1:
            myGridArea = "1 / 2 / 3 / 3";
            break;
        case 2:
            myGridArea = "2 / 1 / 4 / 2";
            break;
        case 3:
            myGridArea = "3 / 2 / 4 / 3";
            break;
        case 4:
            myGridArea = "4 / 1 / 5 / 3";
            break;
    }

    return (
        <div className={style.block} style={{gridArea: myGridArea}}>
            <img src={dog} alt={""}/>
        </div>
    )
}

export default BlockMobile;