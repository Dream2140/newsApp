import {
    FETCH_EXTERNAL_NEWS, FETCH_EXTERNAL_NEWS_ERROR, FETCH_EXTERNAL_NEWS_SUCCESS,
    GET_USERS_LIST,
    GET_USERS_LIST_ERROR,
    GET_USERS_LIST_SUCCESS, POST_NEWS, POST_NEWS_ERROR, POST_NEWS_SUCCESS,
    UPDATE_USER, UPDATE_USER_ERROR,
    UPDATE_USER_SUCCESS
} from "../types/admin";
import AdminService from "../../services/adminService";
import {showSnackbar} from "./snackbar";

export const fetchUsersList = (params) => async (dispatch) => {

    dispatch({type: GET_USERS_LIST});
    try {
        const users = await AdminService.getUsersList(params);
        dispatch({
            type: GET_USERS_LIST_SUCCESS,
            payload: users,
        });
    } catch (error) {
        console.error(error)
        dispatch({
            type: GET_USERS_LIST_ERROR,
            payload: error,
        });
    }
};


export const adminUpdateUserData = (userId, editedUsers) => async (dispatch) => {
    dispatch({type: UPDATE_USER});
    try {
        const users = await AdminService.changeUser(userId, editedUsers);
        dispatch({
            type: UPDATE_USER_SUCCESS
        });
    } catch (error) {
        console.error(error.response.data)
        dispatch({
            type: UPDATE_USER_ERROR,
            payload: error.response.data,
        });
    }
};

export const postNews = (newsFields) => async (dispatch) => {
    dispatch({
        type: POST_NEWS,
    });
    try {
        const news = await AdminService.postNews(newsFields);

        dispatch({
            type: POST_NEWS_SUCCESS
        });

        dispatch(showSnackbar('News successfully added'), 'success')

    } catch (err) {
        console.error(err)
        dispatch(showSnackbar(err.response.data.message, 'error'))
        dispatch({
            type: POST_NEWS_ERROR,
            payload: err
        });
    }
};

export const fetchExternalNews = (source) => async (dispatch) => {
    dispatch({
        type: FETCH_EXTERNAL_NEWS,
    });
    try {

        const news = await AdminService.fetchExternalNews(source);

        dispatch({
            type: FETCH_EXTERNAL_NEWS_SUCCESS
        });

        dispatch(showSnackbar('News successfully fetched'), 'success')

    } catch (err) {
        console.error(err)
        dispatch(showSnackbar(err.response.data.message, 'error'))
        dispatch({
            type: FETCH_EXTERNAL_NEWS_ERROR,
            payload: err
        });
    }
};