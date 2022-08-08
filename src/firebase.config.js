// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByxW4pOr31M1U1Zh6Il-vuxDJveEFGxeo",
  authDomain: "property-marketplace-app-79db9.firebaseapp.com",
  projectId: "property-marketplace-app-79db9",
  storageBucket: "property-marketplace-app-79db9.appspot.com",
  messagingSenderId: "984439605612",
  appId: "1:984439605612:web:5fac83aee6c356b2048b49",
  measurementId: "G-MED4WYCTVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();