// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-Pi3vPZyhIrLvvWiUMTVok_iEojb0ydM",
    authDomain: "job-portal-e42d6.firebaseapp.com",
    projectId: "job-portal-e42d6",
    storageBucket: "job-portal-e42d6.appspot.com",
    messagingSenderId: "474939547188",
    appId: "1:474939547188:web:12d31601260d10818f3461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;