import $api from "../../lib/axios";
import {API_PATH} from "../../helpres/apiPath";
import {
    AUTH_REQUEST,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    UPDATE_USER_DATA,
    UPDATE_USER_DATA_ERROR,
    UPDATE_USER_DATA_SUCCESS,
    UPDATE_USER_PASSWORD, UPDATE_USER_PASSWORD_ERROR,
    UPDATE_USER_PASSWORD_SUCCESS
} from "../types/user";
import {closeModal} from "./modal";
import UserService from "../../services/userService";
import {showSnackbar} from "./snackbar";

export const loginUser = (form) => async dispatch => {
    try {
        dispatch(authRequest());
        const data = await UserService.login(form);
        localStorage.setItem('token', data.accessToken);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {...data.user, token: data.accessToken},

        });

        dispatch(closeModal())

    } catch (err) {
        console.error(err)
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data
        });
    }
};
export const authRequest = () => {
    return {
        type: AUTH_REQUEST
    };
}
export const logoutUser = () => {
    localStorage.removeItem('token');
    return {
        type: LOGOUT
    };
};

export const registerUser = (form) => async dispatch => {

    try {
        dispatch(authRequest());

        const res = await $api.post(API_PATH.registerUser, {
            password: form.password,
            nickname: form.nickname,
            email: form.email
        });
        localStorage.setItem('token', res.data.accessToken);
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

export const updateUserData = (userData) => async (dispatch, getState) => {
    dispatch({type: UPDATE_USER_DATA});
    try {
        const userId = getState()
        await UserService.changeUser(userId.user.id, userData);
        dispatch({
            type: UPDATE_USER_DATA_SUCCESS,
            payload: userData
        });
        dispatch(showSnackbar('Nickname successfully updated', 'success'))
    } catch (error) {
        console.error(error.response.data)
        dispatch(showSnackbar(error.response.data.message, 'error'))
        dispatch({
            type: UPDATE_USER_DATA_ERROR,
            payload: error.response.data,
        });
    }
};

export const updateUserPassword = (currentPassword, newPassword) => async (dispatch, getState) => {
    dispatch({type: UPDATE_USER_PASSWORD});
    try {
        const userId = getState();

        await UserService.changePassword(userId.user.id, currentPassword, newPassword);

        dispatch({
            type: UPDATE_USER_PASSWORD_SUCCESS
        });

        dispatch(showSnackbar('Password successfully updated', 'success'))
    } catch (error) {
        console.error(error.response.data)
        dispatch(showSnackbar(error.response.data.message, 'error'))
        dispatch({
            type: UPDATE_USER_PASSWORD_ERROR,
            payload: error.response.data,
        });
    }
};

