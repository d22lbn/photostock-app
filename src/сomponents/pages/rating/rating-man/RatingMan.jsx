import React from "react";
import style from "./RatingMan.module.css"
import Block from "../../../blocks/Block";

const RatingMan = (props) => {
    let photos = props.photos.map((photo) =>
        <div className={style.photo}>
            <img src={photo.img} alt={""}/>
        </div>
    )

    console.log(props)

    return (
        <div className={style.rating__man}>
            <div className={style.ava}>
                <img src={props.ava} alt={""}/>
            </div>
            <div className={style.information}>
                <h3 className={style.name}>{props.name}</h3>
                <h4 className={style.text}>{props.text}</h4>
                <div className={style.photos}>
                    {photos}
                    <Block/>
                </div>
            </div>
            <h3 className={style.rating}>
                № <span>{props.rating}</span>
            </h3>
        </div>
    )
}

export default RatingMan;