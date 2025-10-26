// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOLWO1WP8xlQi_TrQlob3PSChKXME9WvU",
  authDomain: "ashley-portfolio-62b1b.firebaseapp.com",
  projectId: "ashley-portfolio-62b1b",
  storageBucket: "ashley-portfolio-62b1b.firebasestorage.app",
  messagingSenderId: "176285401766",
  appId: "1:176285401766:web:57938d3b28b5a360d92a67",
  measurementId: "G-B2ME7RSW5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);