import {createStore} from 'redux'

/**
 * Created by Clearpath on 12/3/2016.
 */

interface  LoginState {
    isLogin?: boolean;
}

function loginStore(state: LoginState = {isLogin: false}, action) {
    switch (action.type) {
        case 'Login':
            state.isLogin = true;

            return state;
        case 'Logout':
            state.isLogin = false;

            return state;
    }
}

export const store = createStore(loginStore);