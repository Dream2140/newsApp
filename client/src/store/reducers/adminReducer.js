import {
    FETCH_EXTERNAL_NEWS, FETCH_EXTERNAL_NEWS_ERROR, FETCH_EXTERNAL_NEWS_SUCCESS,
    GET_USERS_LIST,
    GET_USERS_LIST_ERROR,
    GET_USERS_LIST_SUCCESS,
    POST_NEWS,
    POST_NEWS_ERROR,
    POST_NEWS_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_SUCCESS
} from "../types/admin";

const initialState = {
    docs: [],
    totalDocs: 0,
    limit: 8,
    totalPages: 0,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: 2,
    loading: false,
    error: false,
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                loading: true,
            };
        case GET_USERS_LIST_SUCCESS:
            return {
                ...state,
                ...action.payload,
                docs: [...state.docs, ...action.payload.docs],
                loading: false,
                error: false
            };
        case GET_USERS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case UPDATE_USER:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            };
        case UPDATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case POST_NEWS:
            return {
                ...state,
                loading: true,
            };
        case POST_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: false
            };
        case POST_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case FETCH_EXTERNAL_NEWS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_EXTERNAL_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            };
        case FETCH_EXTERNAL_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};