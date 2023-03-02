import {API_URL} from "../variables/variables";

export class API_PATH {
    static baseUrl = API_URL;

    static get authUser() {
        return this.baseUrl + "api/user/login/";
    }

    static get registerUser() {
        return this.baseUrl + "api/user/register/";
    }

    static get logout() {
        return this.baseUrl + "api/user/logout/";
    }

    static get refresh() {
        return this.baseUrl + "api/user/refresh/";
    }

    static get getNews() {
        return this.baseUrl + "api/news/get-all-news";
    }

    static get postNews() {
        return this.baseUrl + "api/news/post-news/";
    }

    static get deleteComment() {
        return this.baseUrl + "api/comment/";
    }

    static get getNewsCommentsList() {
        return this.baseUrl + "api/comment/news-coments/";
    }

    static get addComment() {
        return this.baseUrl + "api/comment/";
    }

    static get getNewsByTitle() {
        return this.baseUrl + "api/news/get-news-by-title/";
    }

    static get getNewsByCategory() {
        return this.baseUrl + "api/news/category/";
    }

    static get getUserCommentsList() {
        return this.baseUrl + "api/comment/user-comments/";
    }

    static get getUsersList() {
        return this.baseUrl + "api/user/all-users/";
    }

    static get updateUser() {
        return this.baseUrl + "api/user/update-user/";
    }

    static get changeUserPassword() {
        return this.baseUrl + "api/user/update-password/";
    }

    static get fetchNewsFromCybersport() {
        return this.baseUrl + "api/news/update-from-cybersport/";
    }

    static get fetchNewsFromGuardian() {
        return this.baseUrl + "api/news/update-from-guardian/";
    }
}