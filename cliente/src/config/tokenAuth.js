import axiosClient from './axios';

// Agreagar el token en el header de las peticiones
const tokenAuth = token => {
    if(token) {
        axiosClient.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axiosClient.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;