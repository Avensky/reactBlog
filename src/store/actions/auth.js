import axios from 'axios'
import * as actionTypes from './actionTypes'

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const loginSuccess = (token, userId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS, 
        idToken: token,
        userId: userId
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.LOGOUT
    }
}

export const checkLoginTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const login = (email, password, isSignup) => {
    return dispatch => {
        dispatch(loginStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo0MjXkcVqlbWrXY-wqPS245aKcXi2smw'
//        let url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDo0MjXkcVqlbWrXY-wqPS245aKcXi2smw'     
        if (!isSignup) {
            url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDo0MjXkcVqlbWrXY-wqPS245aKcXi2smw'
//            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo0MjXkcVqlbWrXY-wqPS245aKcXi2smw'       
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId); 
                dispatch(loginSuccess(response.data.idToken, response.data.localId));
                dispatch(checkLoginTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(loginFail(err));
            });
    }
}

