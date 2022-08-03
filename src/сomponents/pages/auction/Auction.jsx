import React from "react";
import style from "./Auction.module.css"
import {ThreeDots} from "react-loader-spinner";

const Auction = () => {
    return (
        <main className={style.main}>
            <div className={style.loader}>
                <ThreeDots color="#fafafa" height={200} width={200}/>
                <span>Пока в разработке...</span>
            </div>
        </main>
    )
}

export default Auction;