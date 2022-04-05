// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWcvLajRZaWzEabiTXT9PI3j7y_RiwIUM",
  authDomain: "router-firebase-integration.firebaseapp.com",
  projectId: "router-firebase-integration",
  storageBucket: "router-firebase-integration.appspot.com",
  messagingSenderId: "952807815347",
  appId: "1:952807815347:web:2cc5d48e0443b8dd07d8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;