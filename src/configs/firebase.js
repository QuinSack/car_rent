// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsnjkNZu-3fslfPzKJP6XB91fLEc8y4f4",
  authDomain: "car-rental-8f95d.firebaseapp.com",
  projectId: "car-rental-8f95d",
  storageBucket: "car-rental-8f95d.appspot.com",
  messagingSenderId: "528553244889",
  appId: "1:528553244889:web:13d27cf0efa344159fa6c8",
  measurementId: "G-PNR6RT9B0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);