import $api from "../lib/axios";
import {API_PATH} from "../helpres/apiPath";

export default class AdminService {
    static async getUsersList(query) {
        const res = await $api.get(API_PATH.getUsersList, {params: query})
        return res.data;
    }

    static async postNews(news) {
        const res = await $api.post(API_PATH.postNews, news, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        for (let key of news.keys()) {
            news.delete(key)
        }
        return res.data;
    }

    static async fetchExternalNews(source) {
        if (source === 'cybersport') {
            const res = await $api.get(API_PATH.fetchNewsFromCybersport);
            return res.data;
        }
        const res = await $api.get(API_PATH.fetchNewsFromGuardian);
        return res.data;
    }

}

