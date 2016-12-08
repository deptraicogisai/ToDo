/**
 * Created by Clearpath on 12/7/2016.
 */

import {createStore} from 'redux';
import {Constant} from "../constants/constant";

interface UserState {
    isLogin: boolean;
}

function AuthState(state: UserState = {isLogin: false}, action) {

    switch (action) {

        case Constant.Login:
            state.isLogin = true;
            break;

        case Constant.Logout:
            state.isLogin = false;
            break;
    }

    return state;
}

export const authStore = createStore(AuthState);

