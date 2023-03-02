import axios from 'axios';
import {API_URL} from "../variables/variables";
import {API_PATH} from "../helpres/apiPath";
import {store} from "../store";
import {showSnackbar} from "../store/actions/snackbar";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const refreshUrl = API_PATH.refresh;

            const response = await axios.get(refreshUrl, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            store.dispatch(showSnackbar('Not authorize', 'error'))
        }
    }
    throw error;
})

export default $api;
