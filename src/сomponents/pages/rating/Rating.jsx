import React from "react";
import style from "./Rating.module.css"
import RatingMan from "./rating-man/RatingMan";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Rating = (props) => {

    let peoples = props.state.peoples.map((man) =>
        <RatingMan id={man.id} name={man.name} ava={man.ava} text={man.text} rating={man.rating} photos={man.photos}/>
    )

    return (
        <div>
            <Header/>
            <main className={style.main}>
                <h2>{props.state.title}</h2>
                <div className={style.peoples}>
                    {peoples}
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Rating;