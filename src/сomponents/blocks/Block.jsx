import React from "react";
import style from "./Block.module.css"
import {NavLink} from "react-router-dom";

const Block = (props) => {
    let myGridArea = "";

    let imgWidth = "100%";
    let imgHeight = "100%";
    let imgFit = "cover";

    if (props.mainPage) {
        imgWidth = "80%";
        imgHeight = "80%";
        imgFit = "contain";
    }

    if (props.columnsNumber === 4) {
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
                myGridArea = "3 / 2 / 5 / 3";
                break;
            case 7:
                myGridArea = "3 / 3 / 4 / 4";
                break;
            case 8:
                myGridArea = "3 / 4 / 5 / 5";
                break;
            case 9:
                myGridArea = "4 / 1 / 5 / 2";
                break;
            case 10:
                myGridArea = "4 / 3 / 5 / 4";
                break;
        }
    } else if (props.columnsNumber === 2) {
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
    } else {
        myGridArea = "auto";
    }

    let myImg;
    if (props.withoutReference) {
        myImg = <img src={props.img} alt={props.name} style={{objectFit: imgFit}}/>
    } else {
        myImg =
            <NavLink to={""} id={props.id} name={props.name}>
                <img src={props.img} alt={props.name} style={{objectFit: imgFit}}/>
            </NavLink>
    }

    return (
        <div className={style.block} style={{gridArea: myGridArea}}>
            <div className={style.img__wrapper} style={{width: imgWidth, height: imgHeight}}>
                {myImg}
            </div>
        </div>
    )
}

export default Block;