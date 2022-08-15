import React from "react";
import {combineReducers, createStore} from "redux";

import lkReducer from "./lk-reducer";
import photoReducer from "./photo-reducer";
import mainReducer from "./main-reducer";
import popularReducer from "./popular-reducer";
import searchReducer from "./search-reducer";
import ratingReducer from "./rating-reducer";

let reducers = combineReducers({
    MainPage: mainReducer,
    PopularPage: popularReducer,
    SearchPage: searchReducer,
    RatingPage: ratingReducer,
    LkPage: lkReducer,
    PhotoPage: photoReducer,
});

let store = createStore(reducers);

export default store;