import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS, DELETE_COMMENT, DELETE_COMMENT_ERROR,
    DELETE_COMMENT_SUCCESS,
    LOAD_COMMENTS_FAILURE,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS
} from "../types/comment";

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                isLoading: false,
                error: null,
            };
        case LOAD_COMMENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [action.payload, ...state.comments],
                isLoading: false,
                error: null,
            };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case DELETE_COMMENT:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload),
                isLoading: false,
                error: null,
            };
        case DELETE_COMMENT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;