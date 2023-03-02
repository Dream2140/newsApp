import $api from "../lib/axios";
import {API_PATH} from "../helpres/apiPath";
import axios from "axios";

export default class NewsService {
    static async fetchNews(params) {
        const news = await $api.get(API_PATH.getNews, {params});
        return news.data;
    }

    static async searchNews(searchQuery) {

        const news = await axios.get(API_PATH.getNewsByTitle, {
            params: {
                title: searchQuery
            }
        });
        return news.data;
    }

    static async searchByCategory(params, category) {
        const news = await axios.get(API_PATH.getNewsByCategory, {
            params: {
                ...params,
                category: category.toLowerCase()
            }
        });
        return news.data;
    }
}

