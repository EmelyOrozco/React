// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSQcvjnmJjup0jZUMk2xVVBrwPpd7Ht58",
  authDomain: "login-1acd8.firebaseapp.com",
  databaseURL: "https://login-1acd8-default-rtdb.firebaseio.com",
  projectId: "login-1acd8",
  storageBucket: "login-1acd8.appspot.com",
  messagingSenderId: "1011444535168",
  appId: "1:1011444535168:web:c3df04e641663010e3bb65",
  measurementId: "G-6K7FXMVP6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);