import {HIDE_SNACKBAR, SET_SNACKBAR_MESSAGE, SHOW_SNACKBAR} from "../types/snackbar";


const initialState = {
    open: false,
    message: '',
    type: null,
};

export const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SNACKBAR:
            return {
                ...state,
                open: true,

            };
        case HIDE_SNACKBAR:
            return {
                ...state,
                open: false,

            };
        case SET_SNACKBAR_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,

            };
        default:
            return state;
    }
};