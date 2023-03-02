import {
    GET_USER_COMMENTS_LIST,
    GET_USER_COMMENTS_LIST_ERROR,
    GET_USER_COMMENTS_LIST_SUCCESS
} from "../types/profile";


const initialState = {
    userComments: [],
    loading: false,
    error: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_COMMENTS_LIST:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_COMMENTS_LIST_SUCCESS:
            return {
                ...state,
                userComments: [...action.payload],
                loading: false,
                error: false
            };
        case GET_USER_COMMENTS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};