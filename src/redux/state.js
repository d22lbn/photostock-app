import dog from "./res/mainPage/dog.svg"
import tree from "./res/mainPage/tree.svg"
import car from "./res/mainPage/car.svg"
import tower from "./res/mainPage/tower.svg"
import space from "./res/mainPage/space.png"

import loupe from "./res/searchPage/loupe.svg"
import koalaPhoto from "./res/searchPage/koala.jpg"
import carPhoto from "./res/searchPage/car.jpg"
import seaPhoto from "./res/searchPage/sea.jpg"
import treePhoto from "./res/searchPage/tree.jpg"

import ava from "./res/lkPage/ava.jpg"
import prize1 from "./res/lkPage/1.png"
import prize2 from "./res/lkPage/2.png"
import prize3 from "./res/lkPage/3.png"


const getPhotos = (photoNumber, columnsNumber) => {
    let photos;
    let photosArr = []
    for (let i = 0; i < photoNumber; i++) {
        let photo;
        let rand = Math.round(Math.random() * 3);
        if (rand === 0) {
            photo = {
                id: i,
                name: "коала",
                img: koalaPhoto,
            }
        } else if (rand === 1) {
            photo = {
                id: i,
                name: "машина",
                img: carPhoto,
            }
        } else if (rand === 2) {
            photo = {
                id: i,
                name: "море",
                img: seaPhoto,
            }
        } else {
            photo = {
                id: i,
                name: "дерево",
                img: treePhoto,
            }
        }
        photosArr.push(photo);

        photos = {
            columnsNumber: columnsNumber,
            photosArr: photosArr
        }
    }
    return photos;
}

let state = {
    MainPage: {
        title: "Размещайте и приобретайте красивые фотографии в несколько кликов",
        iconsMobile: [
            {
                id: 0,
                name: "space",
                img: space,
            },
            {
                id: 1,
                name: "space",
                img: space,
            },
            {
                id: 2,
                name: "space",
                img: space,
            },
            {
                id: 3,
                name: "space",
                img: space,
            },
            {
                id: 4,
                name: "space",
                img: space,
            },
        ],
        icons: [
            {
                id: 0,
                name: "собака",
                img: dog,
            },
            {
                id: 1,
                name: "дерево",
                img: tree,
            },
            {
                id: 2,
                name: "машина",
                img: car,
            },
            {
                id: 3,
                name: "башня",
                img: tower,
            },
            {
                id: 4,
                name: "машина",
                img: car,
            },
            {
                id: 5,
                name: "собака",
                img: dog,
            },
            {
                id: 6,
                name: "башня",
                img: tower,
            },
            {
                id: 7,
                name: "дерево",
                img: tree,
            },
            {
                id: 8,
                name: "башня",
                img: tower,
            },
        ]
    },

    PopularPage: {
        popularCategories: [
            {
                title: "Топ 7 новинок",
                photos: getPhotos(7, 1),
            },
            {
                title: "Топ 7 наиболее скачиваемых",
                photos: getPhotos(7, 1),
            },
        ]
    },

    SearchPage: {
        icon: loupe,
        photos: getPhotos(22, 4)
    },

    RatingPage: {
        title: "Лидеры продаж",
        peoples: [
            {
                id: 0,
                name: "Глеб Петров",
                text: "Увлекаюсь фотосъемкой с 12 лет. Побывал в 20 странах, из которых привез свыше 50000 новых интересных кадров!",
                ava: getPhotos(1, 1),
                photos: getPhotos(3, 1),
                rating: 1
            },
            {
                id: 1,
                name: "Артем Иванов",
                text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
                ava: getPhotos(1, 1),
                photos: getPhotos(3, 1),
                rating: 2
            },
            {
                id: 2,
                name: "Артем Иванов",
                text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
                ava: getPhotos(1, 1),
                photos: getPhotos(3, 1),
                rating: 3
            },
            {
                id: 3,
                name: "Артем Иванов",
                text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
                ava: getPhotos(1, 1),
                photos: getPhotos(3, 1),
                rating: 4
            },
        ]
    },

    LkPage: {
        ava: ava,
        name: "Максим",
        surname: "Кузнецов",
        age: 23,
        email: "max555@gmail.com",
        password: "Новый пароль",
        balance: 14563,
        prizes: [prize1, prize2, prize3]
    }
}

export default state;