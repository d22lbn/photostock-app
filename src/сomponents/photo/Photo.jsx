import React from "react";
import style from "./Photo.module.css"
import {NavLink} from "react-router-dom";
import {putLikeActionCreator} from "../../redux/photo-reducer";

const Photo = (props) => {
    let putLike = () => {
        props.dispatch(putLikeActionCreator());
    }

    return (
        <div className={style.photo__wrapper}>
            <div className={style.photo}>
                <button className={style.exit}></button>
                <div className={style.photo__img}>
                    <img src={props.state.img} alt={props.state.name}/>
                </div>
                <div className={style.information}>
                    <div className={style.information__inner}>
                        <h2 className={style.name}>{props.state.name}</h2>
                        <div>
                            <div className={style.likes__wrapper}>
                                <button onClick={putLike}>
                                    <img src={props.state.likeIconActive} alt={""}/>
                                </button>
                                <span className={style.likes}>{props.state.likes}</span>
                            </div>
                            <NavLink to={""} className={style.owner}>{props.state.owner}</NavLink>
                        </div>
                        <h3 className={style.description}>{props.state.description}</h3>
                    </div>
                    <button className={style.buy}>{props.state.price} ₽</button>
                </div>
            </div>
        </div>
    )
}

export default Photo;