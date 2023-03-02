import {HIDE_SNACKBAR, SET_SNACKBAR_MESSAGE, SHOW_SNACKBAR} from "../types/snackbar";

export const showSnackbar = (message,type) => {
    return (dispatch) => {
        dispatch({type: SHOW_SNACKBAR});

        dispatch({
            type: SET_SNACKBAR_MESSAGE,
            payload: {message, type}
        });
    };
};

export const hideSnackbar = () => {
    return (dispatch) => {
        dispatch({type: HIDE_SNACKBAR});
    };
};
