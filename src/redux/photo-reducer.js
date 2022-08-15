import like from "./res/photoPage/like.png";
import likeActive from "./res/photoPage/likeActive.png";
import carPhoto from "./res/searchPage/car.jpg";

const PUT_LIKE = 'PUT-LIKE'

let initialState = {
    img: carPhoto,
    name: "Машина",
    description: "Этот удивительный автомобиль был запечатлен в славном городе Сиднее",
    likes: 236,
    likeIconActive: like,
    owner: "Борис",
    price: 12000
}

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_LIKE:
            if (state.likeIconActive === like) {
                state.likeIconActive = likeActive;
                state.likes++;
            } else {
                state.likeIconActive = like;
                state.likes--;
            }
            return state;
        default:
            return state;
    }
}

export const putLikeActionCreator = () => ({type: PUT_LIKE})

export default photoReducer;