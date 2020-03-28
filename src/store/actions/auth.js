import axios from 'axios'
import * as actionTypes from './actionTypes'

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const login = (email, password, isSignup) => {
    return dispatch => {
        dispatch(loginStart());
        const loginData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDo0MjXkcVqlbWrXY-wqPS245aKcXi2smw'
        if (!isSignup) {
            url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo0MjXkcVqlbWrXY-wqPS245aKcXi2smw'
        }
        axios.post(url, loginData).then(response => {
            console.log(response);
            dispatch(loginSuccess())
        })
        .catch(err => {
            console.log(err)
            dispatch(loginFail(err.response.data.error))
        })
    }
}

