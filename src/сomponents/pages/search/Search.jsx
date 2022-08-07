import React from "react";
import style from "./Search.module.css"

import Blocks from "../../blocks/Blocks";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Search = (props) => {
    let photos = props.state.photos;
    let photosArrays = [];
    let photoArray = [];
    for (let i = 0; i < photos.length; i++) {
        if (i % 11 === 0 && photoArray.length > 0) {
            photosArrays.push(photoArray);
            photoArray = [];
            photoArray.push(photos[i]);
        } else {
            photoArray.push(photos[i]);
        }
    }
    photosArrays.push(photoArray);

    let blocks = photosArrays.map((photoArray) =>
        <Blocks imgArr={photoArray} columnsNumber={4}/>
    );

    return (
        <div>
            <Header/>
            <main className={style.main}>
                <form className={style.search}>
                    <input type={"text"} placeholder={"Что найти?"}/>
                    <button type={"submit"}>
                        <img src={props.state.icon} alt={""}/>
                    </button>
                </form>
                <div>
                    {blocks}
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Search;