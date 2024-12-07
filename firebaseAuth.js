// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjFfXcJfwi-HEXqyBShJQTJgINL2lCILI",
  authDomain: "wma-hackathon.firebaseapp.com",
  projectId: "wma-hackathon",
  storageBucket: "wma-hackathon.firebasestorage.app",
  messagingSenderId: "972518312500",
  appId: "1:972518312500:web:64be8a37b21c37eb299861",
  measurementId: "G-XX21SGE9R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);