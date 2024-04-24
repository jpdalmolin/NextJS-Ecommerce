// Import the functions you need from the SDKs you need

import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMDvtFWaa2LO8GfGHCV0NS1-BmX7_DeKw",
  authDomain: "nextcommerce-c184b.firebaseapp.com",
  projectId: "nextcommerce-c184b",
  storageBucket: "nextcommerce-c184b.appspot.com",
  messagingSenderId: "1043937066944",
  appId: "1:1043937066944:web:ab8c3b9927fb72ce6c1225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);