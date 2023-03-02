import $api from "../lib/axios";
import {API_PATH} from "../helpres/apiPath";
import axios from "axios";

export default class ProfileService {
    static async getUserCommentsList(userId) {
        const res = await $api.get(API_PATH.getUserCommentsList + userId);
        return res.data;
    }

    static async deleteComment(commentId) {
        const res = await axios.delete(API_PATH.deleteComment + commentId);

        return res.data;
    }
}

