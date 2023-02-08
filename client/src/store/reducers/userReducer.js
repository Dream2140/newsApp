import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, REGISTER_SUCCESS} from "../../types/user";


const initialState = {
    isAuthenticated: false,
    token: null,
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                ...action.payload,
                error: null
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isRegistered: true,
                ...action.payload,
                error: null
            };
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
