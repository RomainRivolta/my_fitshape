import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgLWq5KljevLjs7Mzm8SOGoWl7SsZXkgg",
    authDomain: "my-fitshape-healthy-c13a5.firebaseapp.com",
    projectId: "my-fitshape-healthy-c13a5",
    storageBucket: "my-fitshape-healthy-c13a5.appspot.com",
    messagingSenderId: "217544447928",
    appId: "1:217544447928:web:e5999c4cc5c649adcb214d"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);