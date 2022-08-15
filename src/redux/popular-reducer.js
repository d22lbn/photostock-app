import seaPhoto from "./res/searchPage/sea.jpg";

let initialState = {
    popularCategories: [{
        title: "Топ 6 новинок",
        photos: [
            {id: 0, name: "море", img: seaPhoto},
            {id: 1, name: "море", img: seaPhoto},
            {id: 2, name: "море", img: seaPhoto},
            {id: 3, name: "море", img: seaPhoto},
            {id: 4, name: "море", img: seaPhoto},
            {id: 5, name: "море", img: seaPhoto},
        ],
    }, {
        title: "Топ 6 наиболее скачиваемых",
        photos: [
            {id: 0, name: "море", img: seaPhoto},
            {id: 1, name: "море", img: seaPhoto},
            {id: 2, name: "море", img: seaPhoto},
            {id: 3, name: "море", img: seaPhoto},
            {id: 4, name: "море", img: seaPhoto},
            {id: 5, name: "море", img: seaPhoto},
        ],
    },]
}

const popularReducer = (state = initialState, action) => {
    return state;
}

export default popularReducer;