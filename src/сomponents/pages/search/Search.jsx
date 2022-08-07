import React from "react";
import style from "./Search.module.css"

import Blocks from "../../blocks/Blocks";

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
    )
}

export default Search;