import {createStore} from 'redux'
import {Constant} from "../constants/constant";

/**
 * Created by Clearpath on 12/3/2016.
 */

interface  CommonState {
    isLogin?: boolean;
    title?: string;
}

function loginStore(state: CommonState = {isLogin: false}, action) {
    switch (action.type) {
        case Constant.Login:
            state.isLogin = true;

            return state;
        case Constant.Logout:
            state.isLogin = false;

            return state;

        case Constant.UserPage:
            state.title = 'User List'

            return state;

        case Constant.UserDetailPage:
            state.title = 'User Detail'

            return state;
    }
}

export const store = createStore(loginStore);