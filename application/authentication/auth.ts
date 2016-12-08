import C from "../config/firebase-config";
import {Constant} from "../constants/constant";
import {store} from "../stores/index";
/**
 * Created by Clearpath on 12/7/2016.
 */

const auth = {
    login: (provider) => {
        let authProvider = null;
        switch (provider) {
            case Constant.Provider.Facebook:
                authProvider = new C.FIREBASE.auth.FacebookAuthProvider();
                break;
            case Constant.Provider.Google:
                authProvider = new C.FIREBASE.auth.GoogleAuthProvider();
                break;
            case Constant.Provider.GitHub:
                authProvider = new C.FIREBASE.auth.GithubAuthProvider();
                break;
        }

        C.FIREBASE.auth().signInWithPopup(authProvider)
            .then((result) =>
                store.noticeStore.dispatch({
                    type: Constant.Authentication.Success,
                    payload: {
                        message: Constant.Authentication.LoginSuccess
                    }
                })
            )
            .catch((error) =>
                store.noticeStore.dispatch({
                    type: Constant.Authentication.Error,
                    payload: {
                        message: error.message
                    }
                })
            );
    },

    logout: () => {
        C.FIREBASE.auth().signOut();
    },

    getCurrentUser: () => {
        let user = C.FIREBASE.auth().currentUser;
        return C.FIREBASE.auth().currentUser;
    }
}

export default auth;