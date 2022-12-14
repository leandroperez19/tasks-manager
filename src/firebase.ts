// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8owLbPfHPsMHb4MAPtjBs9YD8YW39BEc",
  authDomain: "tasks-manager-b753c.firebaseapp.com",
  projectId: "tasks-manager-b753c",
  storageBucket: "tasks-manager-b753c.appspot.com",
  messagingSenderId: "753229315365",
  appId: "1:753229315365:web:41f7699e637109b065eecc",
  measurementId: "G-VZBXZP6LHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;