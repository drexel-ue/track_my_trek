import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = error => ({
    type: RECEIVE_SESSION_ERRORS,
    error
});

export const signup = userData => dispatch =>
    SessionUtil.signup(userData)
        .then(user => dispatch(receiveUser(user)),
            error => dispatch(receiveErrors(error)));

export const login = userData => dispatch =>
    SessionUtil.login(userData)
        .then(user => dispatch(receiveUser(user)),
            error => dispatch(receiveErrors(error)));

export const logout = () => dispatch =>
    SessionUtil.logout()
        .then(() => dispatch(logoutUser()));


window.signup = signup;
window.login = login;
window.logout = logout;