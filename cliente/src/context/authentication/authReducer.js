import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_USER,
    CLOSE_SESION
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            //localStorage.setItem('authenticated', true);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('authenticated');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state;
    }
}