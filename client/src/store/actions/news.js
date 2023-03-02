import {
    CHANGE_CATEGORY,
    CHANGE_CATEGORY_ERROR,
    FETCH_NEWS,
    FETCH_NEWS_ERROR,
    FETCH_NEWS_SUCCESS,
    SEARCH_NEWS,
    SEARCH_NEWS_ERROR,
    SEARCH_NEWS_SUCCESS,
    SHOW_ALL,
    SORT_BY_CATEGORY_ERROR
} from "../types/news";
import NewsService from "../../services/newsService";

export const fetchNews = (params) => async (dispatch) => {
    dispatch({type: FETCH_NEWS});
    try {
        const news = await NewsService.fetchNews(params);

        dispatch({
            type: FETCH_NEWS_SUCCESS, payload: news,
        });
    } catch (error) {
        dispatch({type: FETCH_NEWS_ERROR});
    }
};

export const changeNewsCategory = (category) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_CATEGORY, payload: category
        });
    } catch (error) {
        console.error(error)
        dispatch({type: CHANGE_CATEGORY_ERROR});
    }
};

export const showAll = () => (dispatch) => {
    try {
        dispatch({
            type: SHOW_ALL
        });
    } catch (error) {
        console.error(error)
        dispatch({type: SORT_BY_CATEGORY_ERROR});
    }
}

export const searchNews = (searchQuery) => async (dispatch) => {
    dispatch({type: SEARCH_NEWS});
    try {
        const searchRequest = await NewsService.searchNews(searchQuery);

        if (searchRequest.length === 0) {
            dispatch({
                type: SEARCH_NEWS_ERROR, payload: {error: `${searchQuery} not found`}
            });
        }
        dispatch({
            type: SEARCH_NEWS_SUCCESS, payload: {searchQuery, searchRequest}
        });
    } catch (error) {
        console.error(error)
        dispatch({type: SEARCH_NEWS_ERROR});
    }
};


