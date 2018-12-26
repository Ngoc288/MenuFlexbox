import axios from 'axios';
import { API_BASE, TOKEN } from './config';
import toastr from './toastr';

const instance = axios.create({
    baseURL: API_BASE
});

// Now all requests using this instance will wait 2.5 seconds before timing out
// instance.defaults.timeout = 2500;
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['x-access-token'] = localStorage.getItem('token');


// instance.interceptors.request...
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request', config);
    return config;
}, function (error) {
    // Do something with request error
    if(error.response.status==401){
        toastr.error("Out of session, please login again!");
        setTimeout(() => {
            window.open("/login.html", "_self");
        }, 2000);
    }
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('response', response);
    return response;
}, function (error) {
    // Do something with response error
    toastr.error('API ERROR', error);
    return Promise.reject(error);
});

export default instance;