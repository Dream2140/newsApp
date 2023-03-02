import {
    CHANGE_CATEGORY, CHANGE_CATEGORY_ERROR,
    FETCH_NEWS,
    FETCH_NEWS_ERROR,
    FETCH_NEWS_SUCCESS, SEARCH_NEWS, SEARCH_NEWS_ERROR, SEARCH_NEWS_SUCCESS
} from "../types/news";

const initialState = {
    category: 'all',
    searchQuery: '',
    docs: [],
    totalDocs: 0,
    limit: 10,
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

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                docs: [...state.docs, ...action.payload.docs],
                loading: false,
                error: false
            };
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case CHANGE_CATEGORY:
            return {
                ...initialState,
                category: action.payload
            };
        case CHANGE_CATEGORY_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };

        /*
    case SORT_BY_CATEGORY:
        return {
            ...state,
            loading: true,

        };
    case SORT_BY_CATEGORY_SUCCESS:
        return {
            ...state,
            ...action.payload.news,
            docs: [...action.payload.news.docs],
            category: action.payload.category,
            loading: false,
            error: false
        };
    case SHOW_ALL:
        return {
            ...state,
            category: 'all',
            loading: false,
            error: false
        };
    case SORT_BY_CATEGORY_ERROR:
        return {
            ...state,
            loading: false,
            error: true,
        }; */
        case SEARCH_NEWS:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case SEARCH_NEWS_SUCCESS:
            return {
                ...state,
                searchQuery: action.payload.searchQuery,
                docs: [...action.payload.searchRequest],
                loading: false,
                error: false
            };
        default:
            return state;
    }
};