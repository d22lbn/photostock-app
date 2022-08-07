import React from "react";
import style from "./Popular.module.css";

import PopularCategory from "./popular-categories/PopularCategory";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Popular = (props) => {
    let categories = props.state.popularCategories.map((category) =>
        <PopularCategory title={category.title} photos={category.photos}/>
    );

    return (
        <div>
            <Header/>
            <main className={style.main}>
                <div className={style.categories}>
                    {categories}
                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default Popular;