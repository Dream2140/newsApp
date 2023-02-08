import $api from "../../lib/axios";
import {API_PATH} from "../../helpres/apiPath";
import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, REGISTER_SUCCESS} from "../../types/user";
import {closeModal} from "./modal";

export const loginUser = (form) => async dispatch => {
    try {
        const res = await $api.post(API_PATH.authUser, {
            password: form.password,
            email: form.email
        });
        dispatch(closeModal())
        const token = res.data.accessToken;
        localStorage.setItem('jwtToken', token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {token, ...res.data.user},

        });
    } catch (err) {

         dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data
        });
    }
};

export const logoutUser = () => {
    localStorage.removeItem('jwtToken');
    return {
        type: LOGOUT
    };
};

export const registerUser = (form) => async dispatch => {

    try {
        const res = await $api.post(API_PATH.registerUser, {
            password: form.password,
            nickname: form.nickname,
            email: form.email
        });

        dispatch(closeModal())
        const token = res.data.accessToken;
        localStorage.setItem('jwtToken', token);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: {token, ...res.data.user},

        });
    } catch (err) {
        dispatch({
            type: REGISTER_ERROR,
            payload: err.response.data
        });
    }
};
