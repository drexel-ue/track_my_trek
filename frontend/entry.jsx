import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

    console.log('bnskjdnljnsjlknb');

    let preloadedState = {};

    if (window.current_user) {
        preloadedState = {
            entities: {
                users: { [window.current_user.id]: window.current_user }
            },
            session: {
                userId: window.current_user.id
            }
        };
        delete window.current_user;
    }

    const store = configureStore(preloadedState);

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});