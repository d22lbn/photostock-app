import React from "react";
import style from "./Popular.module.css";

import PopularCategory from "./popular-categories/PopularCategory";

const Popular = (props) => {
    let categories = props.state.popularCategories.map((category) =>
        <PopularCategory title={category.title} photos={category.photos}/>
    );

    return (
        <main className={style.main}>
            <div className={style.categories}>
                {categories}
            </div>
        </main>
    )
}

export default Popular;