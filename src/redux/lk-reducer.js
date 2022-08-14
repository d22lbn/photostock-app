const CHANGED_NAME = 'CHANGED-NAME';
const UPDATE_NAME = 'UPDATE-NAME'

const CHANGED_SURNAME = 'CHANGED-SURNAME'
const UPDATE_SURNAME = 'UPDATE-SURNAME'

const CHANGED_AGE = 'CHANGED-AGE'
const UPDATE_AGE = 'UPDATE-AGE'

const CHANGED_EMAIL = 'CHANGED-EMAIL'
const UPDATE_EMAIL = 'UPDATE-EMAIL'

const CHANGED_PASSWORD = 'CHANGED-PASSWORD'
const UPDATE_PASSWORD = 'UPDATE-PASSWORD'

const lkReducer = (state, action) => {
    switch (action.type) {
        case CHANGED_NAME:
            let newName = state.newName;
            if (newName.trim().length > 0) {
                state.name = newName.trim();
            }
            state.newName = '';
            return state;
        case UPDATE_NAME:
            state.newName = action.newName;
            return state;

        case CHANGED_SURNAME:
            let newSurname = state.newSurname;
            if (newSurname.trim().length > 0) {
                state.surname = newSurname.trim();
            }
            state.newSurname = '';
            return state;
        case UPDATE_SURNAME:
            state.newSurname = action.newSurname;
            return state;

        case CHANGED_AGE:
            let newAge = state.newAge;
            if (newAge.trim().length > 0) {
                state.age = newAge.trim();
            }
            state.newAge = '';
            return state;
        case UPDATE_AGE:
            state.newAge = action.newAge;
            return state;

        case CHANGED_EMAIL:
            let newEmail = state.newEmail;
            if (newEmail.trim().length > 0) {
                state.email = newEmail.trim();
            }
            state.newEmail = '';
            return state;
        case UPDATE_EMAIL:
            state.newEmail = action.newEmail;
            return state;

        case CHANGED_PASSWORD:
            let newPassword = state.newPassword;
            if (newPassword.trim().length > 0) {
                state.password = newPassword.trim();
            }
            state.newPassword = '';
            return state;
        case UPDATE_PASSWORD:
            state.newPassword = action.newPassword;
            return state;

        default:
            return state;
    }
}

export const changeNameActionCreator = () => ({type: CHANGED_NAME})
export const updateNameActionCreator = (text) => ({type: UPDATE_NAME, newName: text})

export const changeSurnameActionCreator = () => ({type: CHANGED_SURNAME})
export const updateSurnameActionCreator = (text) => ({type: UPDATE_SURNAME, newSurname: text})

export const changeAgeActionCreator = () => ({type: CHANGED_AGE})
export const updateAgeActionCreator = (text) => ({type: UPDATE_AGE, newAge: text})

export const changeEmailActionCreator = () => ({type: CHANGED_EMAIL})
export const updateEmailActionCreator = (text) => ({type: UPDATE_EMAIL, newEmail: text})

export const changePasswordActionCreator = () => ({type: CHANGED_PASSWORD})
export const updatePasswordActionCreator = (text) => ({type: UPDATE_PASSWORD, newPassword: text})

export default lkReducer;