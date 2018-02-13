import types from './types';
import axios from 'axios';

export function signin(creds){
    return dispatch => {
        axios.post('/auth/signin', creds).then( resp =>{
            console.log('Signin Resp:', resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: types.SIGN_IN
            });
        }).catch(err => {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Invalid Username and/or Password'
            });
        });
    }
}

export function signup(creds){
    return async dispatch => {
        try{
            const request = await axios.post('/auth/signup', creds);

            localStorage.setItem('token', request.data.token);

            dispatch({
                type: types.SIGN_UP
            })
        } catch(err){
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Error signing up'
            })
        };
        
    }
}