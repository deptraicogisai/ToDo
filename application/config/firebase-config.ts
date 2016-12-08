/**
 * Created by Clearpath on 12/6/2016.
 */
import * as firebase from 'firebase'

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBe3d9o4yhmifsG6GabsVFYGGPQKq2s80E",
    authDomain: "pastebin-a3a37.firebaseapp.com",
    databaseURL: "https://pastebin-a3a37.firebaseio.com",
    storageBucket: "angular2-auth.appspot.com"
}

firebase.initializeApp(FIREBASE_CONFIG);

const C = {
    FIREBASE: firebase
}

export  default C;