import $api from "../lib/axios";
import {API_PATH} from "../helpres/apiPath";

export default class UserService {
    static async login(form) {

        const res = await $api.post(API_PATH.authUser, {
            password: form.password,
            email: form.email
        });

        const token = res.data.accessToken;

        localStorage.setItem('jwtToken', token);

        return res.data;
    }

    static async registration(email, password) {
        return $api.post(API_PATH.registerUser, {email, password})
    }

    static async logout() {
        return $api.post(API_PATH.logout)
    }

    static async changeUser(userId, userData) {

        const res = await $api.put(API_PATH.updateUser + userId, userData)
        return res.data;
    }

    static async changePassword(userId, currentPassword, newPassword) {
        const res = await $api.put(API_PATH.changeUserPassword + userId, {currentPassword, newPassword})
        return res.data;
    }
}

