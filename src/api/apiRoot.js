import axios from "axios";
import toast from "../services/toast";
import {baseUrl} from "../config";

const xAccessToken = 'x-access-token';

axios.interceptors.response.use(null, (error) => {
    const status = error.response.status;

    error.response.IsExpired = (status === 401);

    const expectedError =
        error.response &&
        status >= 400 &&
        status < 500;

    if (!expectedError) {
        // console.log("logging the error", error);
        // alert("An unexpected error occurred.");
        toast.error("An unexpected error occurred.", {position: "bottom-right"});
    }

    return Promise.reject(error);
});

axios.interceptors.request.use(
    function (config) {
        config.baseURL = baseUrl;
        return config;

        // config.headers[xAccessToken] = key.authGet();
        // FIXME Do something before request is sent
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

const apiRoot = {
    ...axios
}

export default apiRoot;
