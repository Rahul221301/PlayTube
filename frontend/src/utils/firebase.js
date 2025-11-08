// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "clone-5a210.firebaseapp.com",
    projectId: "clone-5a210",
    storageBucket: "clone-5a210.firebasestorage.app",
    messagingSenderId: "716596175921",
    appId: "1:716596175921:web:0b5ac92b73218c2b8a6110",
    measurementId: "G-1K2W6T02BD"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }