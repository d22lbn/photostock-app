import React from "react";
import style from "./Auction.module.css"
import {ThreeDots} from "react-loader-spinner";
import Header from "../../header/Header";

const Auction = () => {
    return (
        <div>
            <Header/>
            <main className={style.main}>
                <div className={style.loader}>
                    <ThreeDots color="#fafafa" height={200} width={200}/>
                    <span>Пока в разработке...</span>
                </div>
            </main>
        </div>
    )
}

export default Auction;