import $api from "../lib/axios";
import {API_PATH} from "../helpres/apiPath";

export default class CommentService {
    static async getNewsCommentsList(newsId) {

        const res = await $api.get(API_PATH.getNewsCommentsList + newsId);
        return res.data;
    }

    static async addComment(commentData) {
        const res = await $api.post(API_PATH.addComment, {...commentData});

        return res.data;
    }

    static async getUserCommentsList(userId) {
        const res = await $api.get(API_PATH.getUserCommentsList + userId);
        return res.data;
    }
}

