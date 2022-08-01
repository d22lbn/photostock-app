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


let photos = []
const getPhotos = () => {
    for (let i = 0; i < 22; i++) {
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
        photos.push(photo);
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

    SearchPage: {
        icon: loupe,
        photos: getPhotos()
    }
}

export default state;