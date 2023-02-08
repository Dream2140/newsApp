import $api from "../lib/axios";
import {API_PATH} from "../helpres/apiPath";

export default class AuthService {
    static async login(email, password) {
    return $api.post(API_PATH.authUser, {email, password})
}

static async registration(email, password) {
    return $api.post(API_PATH.registerUser, {email, password})
}

static async logout(){
    return $api.post(API_PATH.logout)
}

}

