import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeCFsgvzGkTPtzpW2hriaeSISx_JHLTeA",
    authDomain: "clone-97b05.firebaseapp.com",
    projectId: "clone-97b05",
    storageBucket: "clone-97b05.appspot.com",
    messagingSenderId: "408107883739",
    appId: "1:408107883739:web:eb1fef1d91f440f38d40fe",
    measurementId: "G-SMHK10QKPS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };