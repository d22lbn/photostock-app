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

import like from "./res/photoPage/like.png"
import likeActive from "./res/photoPage/likeActive.png"


const getPhotos = (photoNumber) => {
    let photos = []
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
                img: space,
            },
            {
                id: 1,
                img: space,
            },
            {
                id: 2,
                img: space,
            },
            {
                id: 3,
                img: space,
            },
            {
                id: 4,
                img: space,
            },
        ],
        icons: [
            {
                id: 0,
                img: dog,
            },
            {
                id: 1,
                img: tree,
            },
            {
                id: 2,
                img: car,
            },
            {
                id: 3,
                img: tower,
            },
            {
                id: 4,
                img: car,
            },
            {
                id: 5,
                img: dog,
            },
            {
                id: 6,
                img: tower,
            },
            {
                id: 7,
                img: tree,
            },
            {
                id: 8,
                img: tower,
            },
        ]
    },

    PopularPage: {
        popularCategories: [
            {
                title: "Топ 7 новинок",
                photos: getPhotos(7),
            },
            {
                title: "Топ 7 наиболее скачиваемых",
                photos: getPhotos(7),
            },
        ]
    },

    SearchPage: {
        icon: loupe,
        photos: getPhotos(22)
    },

    RatingPage: {
        title: "Лидеры продаж",
        peoples: [
            {
                id: 0,
                name: "Глеб Петров",
                text: "Увлекаюсь фотосъемкой с 12 лет. Побывал в 20 странах, из которых привез свыше 50000 новых интересных кадров!",
                ava: ava,
                photos: getPhotos(3),
                rating: 1
            },
            {
                id: 1,
                name: "Артем Иванов",
                text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
                ava: ava,
                photos: getPhotos(3),
                rating: 2
            },
            {
                id: 2,
                name: "Артем Иванов",
                text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
                ava: ava,
                photos: getPhotos(3),
                rating: 3
            },
            {
                id: 3,
                name: "Артем Иванов",
                text: "В 15 лет мне подарили фотоаппарат и понеслось... Любимая категория фотографий - портрет.",
                ava: ava,
                photos: getPhotos(3),
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
        balance: "1 563 278",
        prizes: [prize1, prize2, prize3, prize1],
        published: getPhotos(7),
        purchased: getPhotos(8),

        newName: "",
        newSurname: "",
    },

    PhotoPage: {
        img: carPhoto,
        name: "Машина",
        description: "Этот удивительный автомобиль был запечатлен в славном городе Сиднее",
        likes: 236,
        likeIconActive: like,
        owner: "Борис",
        price: 12000
    }
}


export const changedName = () => {
    let newName = state.LkPage.newName;
    if (newName.length > 0) {
        state.LkPage.name = newName;
        state.LkPage.newName = '';
    }
    rerenderEntireTree(state);
}

export const updateName = (newName) => {
    state.LkPage.newName = newName;
    rerenderEntireTree(state);
}


export const changedSurname = () => {
    let newSurname = state.LkPage.newSurname;
    if (newSurname.length > 0) {
        state.LkPage.surname = newSurname;
        state.LkPage.newSurname = '';
    }
    rerenderEntireTree(state);
}

export const updateSurname = (newSurname) => {
    state.LkPage.newSurname = newSurname;
    rerenderEntireTree(state);
}


export const putLike = () => {
    if (state.PhotoPage.likeIconActive === like) {
        state.PhotoPage.likeIconActive = likeActive;
        state.PhotoPage.likes++;
    } else {
        state.PhotoPage.likeIconActive = like;
        state.PhotoPage.likes--;
    }
    rerenderEntireTree(state);
}


let rerenderEntireTree = () => {}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;