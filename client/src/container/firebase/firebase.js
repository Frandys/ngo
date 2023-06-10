import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAapkiCxhsIYKhBqULYa78lLyycuEce6Uk",
    authDomain: "react-project-shyam.firebaseapp.com",
    projectId: "react-project-shyam",
    storageBucket: "react-project-shyam.appspot.com",
    messagingSenderId: "265448428488",
    appId: "1:265448428488:web:2bdb6393ec515dad5166fd",
    measurementId: "G-3ZTE3X2LDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { app, auth }
