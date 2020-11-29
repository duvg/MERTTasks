import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import axiosClient from '../../config/axios';

import tokenAuth from '../../config/tokenAuth';

import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_USER,
    CLOSE_SESION
} from '../../types';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    // Registrar a los usuarios
    const registerUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });

            // Obtener el usuario autenticado
            userAuthenticated();

        } catch (error) {
            //console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'danger'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        }
    }

    // Retorna el usuario autenticado
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');

        // Asiganr el token en los default headers
        if (token) {
            tokenAuth(token);
        } 

        try {
            const response = await axiosClient.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    return(
        <AuthContext.Provider
            value={{
                // State
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                // Funciones
                registerUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;