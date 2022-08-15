import ava from "./res/lkPage/ava.jpg";
import seaPhoto from "./res/searchPage/sea.jpg";

let initialState = {
    title: "Лидеры продаж", peoples: [{
        id: 0,
        name: "Глеб Петров",
        text: "Увлекаюсь фотосъемкой с 12 лет. Побывал в 20 странах, из которых привез свыше 50000 новых интересных кадров!",
        ava: ava,
        photos: [
            {id: 0, name: "море", img: seaPhoto},
            {id: 1, name: "море", img: seaPhoto},
            {id: 2, name: "море", img: seaPhoto},
        ],
        rating: 1
    }, {
        id: 1,
        name: "Артем Иванов",
        text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
        ava: ava,
        photos: [
            {id: 0, name: "море", img: seaPhoto},
            {id: 1, name: "море", img: seaPhoto},
            {id: 2, name: "море", img: seaPhoto},
        ],
        rating: 2
    }, {
        id: 2,
        name: "Артем Иванов",
        text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
        ava: ava,
        photos: [
            {id: 0, name: "море", img: seaPhoto},
            {id: 1, name: "море", img: seaPhoto},
            {id: 2, name: "море", img: seaPhoto},
        ],
        rating: 3
    }, {
        id: 3,
        name: "Артем Иванов",
        text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
        ava: ava,
        photos: [
            {id: 0, name: "море", img: seaPhoto},
            {id: 1, name: "море", img: seaPhoto},
            {id: 2, name: "море", img: seaPhoto},
        ],
        rating: 4
    },]
}

const ratingReducer = (state = initialState, action) => {
    return state;
}

export default ratingReducer;