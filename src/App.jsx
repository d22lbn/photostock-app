import './App.css';
import {Route, Routes} from "react-router-dom";

import Header from "./сomponents/header/Header";
import Main from "./сomponents/pages/main/Main";
import Search from "./сomponents/pages/search/Search";
import Auction from "./сomponents/pages/auction/Auction";

function App(props) {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Main state={props.state.MainPage}/>}/>
                <Route path={"/search"} element={<Search state={props.state.SearchPage}/>}/>
                <Route path={"/auction"} element={<Auction/>}/>
            </Routes>
        </div>
    );
}

export default App;
