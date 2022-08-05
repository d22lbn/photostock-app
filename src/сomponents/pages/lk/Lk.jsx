import React from "react";
import style from "./Lk.module.css"

const Lk = (props) => {
    let prizes = props.state.prizes.map((prize) =>
        <div className={style.prize}>
            <img src={prize} alt={""}/>
        </div>
    )

    return (
        <main className={style.main}>
            <div className={style.profile}>
                <div className={style.ava}>
                    <img src={props.state.ava} alt={""}/>
                </div>
                <form className={style.information}>
                    <input type={"text"} placeholder={props.state.name}/>
                    <input type={"text"} placeholder={props.state.surname}/>
                    <input type={"text"} placeholder={props.state.age + " года"}/>
                    <input type={"text"} placeholder={props.state.email}/>
                    <input type={"text"} placeholder={props.state.password}/>
                </form>
                <div className={style.prizes}>
                    {prizes}
                </div>
                <span className={style.balance}>{props.state.balance} руб.</span>
            </div>
        </main>
    )
}

export default Lk;