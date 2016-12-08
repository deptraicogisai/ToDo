/**
 * Created by Clearpath on 12/7/2016.
 */

import {createStore} from 'redux'
import {Constant} from "../constants/constant";

interface Notice {
    status?: boolean;
    message: string;
}

interface NoticeStoreState {
    notice: Notice
}

interface StoreAction<T> {
    type: string;
    payload: T;
}

function noticeStoreReducer(state: NoticeStoreState = {notice: {message: ''}},
                            action: StoreAction<any>) {
    let newState = state;

    switch (action.type) {

        case Constant.Authentication.Error:

            const notice = action.payload as Notice;
            newState.notice.status = false;
            newState.notice.message = notice.message;
            break;

        case Constant.Authentication.Success:

            newState.notice.status = true;
            newState.notice.message = Constant.Authentication.LoginSuccess;
            break;

        case Constant.Authentication.LogoutSuccess:

            newState.notice.status = false;
            newState.notice.message = Constant.Authentication.LogoutSuccess;
            break;
    }

    return newState;
}

export const noticeStore = createStore(noticeStoreReducer);
