import like from "./res/photoPage/like.png";
import likeActive from "./res/photoPage/likeActive.png";

const PUT_LIKE = 'PUT-LIKE'

const photoReducer = (state, action) => {
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