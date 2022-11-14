// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.APP_REACT_apiKey,
    authDomain: process.env.APP_REACT_authDomain,
    projectId: process.env.APP_REACT_projectId,
    storageBucket: process.env.APP_REACT_storageBucket,
    messagingSenderId: process.env.APP_REACT_messagingSenderId,
    appId: process.env.APP_REACT_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app