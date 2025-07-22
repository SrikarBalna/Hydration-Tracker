// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2ocYGJRglbjdU-17yD7lKzVELVFwXLQ",
  authDomain: "hydro-tracker-519d5.firebaseapp.com",
  projectId: "hydro-tracker-519d5",
  storageBucket: "hydro-tracker-519d5.firebasestorage.app",
  messagingSenderId: "631262540064",
  appId: "1:631262540064:web:f3bc6943e5057a4447a745",
  measurementId: "G-KEH9T59VPE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db , app };