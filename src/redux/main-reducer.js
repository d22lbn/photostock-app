import space from "./res/mainPage/space.png";
import dog from "./res/mainPage/dog.svg";
import tree from "./res/mainPage/tree.svg";
import car from "./res/mainPage/car.svg";
import tower from "./res/mainPage/tower.svg";

let initialState = {
    title: "Размещайте и приобретайте красивые фотографии в несколько кликов", iconsMobile: [{
        id: 0, img: space,
    }, {
        id: 1, img: space,
    }, {
        id: 2, img: space,
    }, {
        id: 3, img: space,
    }, {
        id: 4, img: space,
    },], icons: [{
        id: 0, img: dog,
    }, {
        id: 1, img: tree,
    }, {
        id: 2, img: car,
    }, {
        id: 3, img: tower,
    }, {
        id: 4, img: car,
    }, {
        id: 5, img: dog,
    }, {
        id: 6, img: tower,
    }, {
        id: 7, img: tree,
    }, {
        id: 8, img: tower,
    },]
};

const mainReducer = (state = initialState, action) => {
    return state;
}

export default mainReducer;