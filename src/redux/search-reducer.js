import loupe from "./res/searchPage/loupe.svg";
import seaPhoto from "./res/searchPage/sea.jpg";

let initialState = {
    icon: loupe,
    photos: [
        {id: 0, name: "море", img: seaPhoto},
        {id: 1, name: "море", img: seaPhoto},
        {id: 2, name: "море", img: seaPhoto},
        {id: 3, name: "море", img: seaPhoto},
        {id: 4, name: "море", img: seaPhoto},
        {id: 5, name: "море", img: seaPhoto},
        {id: 6, name: "море", img: seaPhoto},
        {id: 7, name: "море", img: seaPhoto},
        {id: 8, name: "море", img: seaPhoto},
        {id: 9, name: "море", img: seaPhoto},
        {id: 10, name: "море", img: seaPhoto},
        {id: 11, name: "море", img: seaPhoto},
        {id: 12, name: "море", img: seaPhoto},
        {id: 13, name: "море", img: seaPhoto},
        {id: 14, name: "море", img: seaPhoto},
        {id: 15, name: "море", img: seaPhoto},
        {id: 16, name: "море", img: seaPhoto},
        {id: 17, name: "море", img: seaPhoto},
        {id: 18, name: "море", img: seaPhoto},
        {id: 19, name: "море", img: seaPhoto},
    ]
}

const searchReducer = (state = initialState, action) => {
    return state;
}

export default searchReducer;