import React from "react";

import './App.css';
import {Route, Routes} from "react-router-dom";

import Header from "./сomponents/header/Header";
import Main from "./сomponents/pages/main/Main";
import Search from "./сomponents/pages/search/Search";
import Auction from "./сomponents/pages/auction/Auction";
import Popular from "./сomponents/pages/popular/Popular";
import Rating from "./сomponents/pages/rating/Rating";
import Lk from "./сomponents/pages/lk/Lk";

function App(props) {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Main state={props.state.MainPage}/>}/>
                <Route path={"/popular"} element={<Popular state={props.state.PopularPage}/>}/>
                <Route path={"/search"} element={<Search state={props.state.SearchPage}/>}/>
                <Route path={"/rating"} element={<Rating state={props.state.RatingPage} />}/>
                <Route path={"/auction"} element={<Auction/>}/>
                <Route path={"/account"} element={<Lk state={props.state.LkPage}/>}/>
            </Routes>
        </div>
    );
}

export default App;
