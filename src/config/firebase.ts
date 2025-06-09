// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv6VP9ikj9vxsiWlj5KjmCLc8GPuYsgxU",
  authDomain: "netflixgpt-a0f7e.firebaseapp.com",
  projectId: "netflixgpt-a0f7e",
  storageBucket: "netflixgpt-a0f7e.firebasestorage.app",
  messagingSenderId: "28282751301",
  appId: "1:28282751301:web:760f4171045d0cd8a1d62c",
  measurementId: "G-GY33357NVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);