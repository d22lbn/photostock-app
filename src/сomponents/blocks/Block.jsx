import React from "react";
import style from "./Block.module.css"

const Block = (props) => {
    let myGridArea = "";

    switch (props.id % 11) {
        case 0:
            myGridArea = "1 / 1 / 2 / 2";
            break;
        case 1:
            myGridArea = "1 / 2 / 2 / 3";
            break;
        case 2:
            myGridArea = "1 / 3 / 2 / 5";
            break;
        case 3:
            myGridArea = "2 / 1 / 4 / 2";
            break;
        case 4:
            myGridArea = "2 / 2 / 3 / 4";
            break;
        case 5:
            myGridArea = "2 / 4 / 3 / 5";
            break;
        case 6:
            myGridArea = "4 / 1 / 5 / 2";
            break;
        case 7:
            myGridArea = "3 / 2 / 5 / 3";
            break;
        case 8:
            myGridArea = "3 / 3 / 4 / 4";
            break;
        case 9:
            myGridArea = "4 / 3 / 5 / 4";
            break;
        case 10:
            myGridArea = "3 / 4 / 5 / 5";
            break;
    }

    return (
        <div className={style.block} style={{gridArea: myGridArea}}></div>
    )
}

export default Block;