// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2OdRIkuI8w4jDkGPxFWDYgMqx1TI84-Y",
  authDomain: "evaluacion1moviles.firebaseapp.com",
  projectId: "evaluacion1moviles",
  storageBucket: "evaluacion1moviles.firebasestorage.app",
  messagingSenderId: "914947621412",
  appId: "1:914947621412:web:dcb6829f83dcea63ad4eb1",
  measurementId: "G-BQBHR5F3PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);