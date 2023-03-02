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

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    role: null,
    token: null,
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case AUTH_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                ...action.payload,
                error: null,
                isLoading: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case LOGOUT:
            return {
                ...initialState
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                ...action.payload,
                error: null,
                isLoading: false
            };
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case UPDATE_USER_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_USER_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                error: false
            };
        case UPDATE_USER_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case UPDATE_USER_PASSWORD:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_USER_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false
            };
        case UPDATE_USER_PASSWORD_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
