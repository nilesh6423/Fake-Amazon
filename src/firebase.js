import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ9RfDStbn59bVHv_dKqClMJ1Ru1s2Uu0",
    authDomain: "clone-7ba5f.firebaseapp.com",
    projectId: "clone-7ba5f",
    storageBucket: "clone-7ba5f.appspot.com",
    messagingSenderId: "743360547911",
    appId: "1:743360547911:web:dfe5b503fdc55644ee3562",
    measurementId: "G-1YKNQ2CYE3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };