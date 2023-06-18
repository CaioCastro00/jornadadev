// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6duKfsQx1PBxH9DSwUs_7vqRLyug_mPE",
  authDomain: "jornadadev-da00c.firebaseapp.com",
  projectId: "jornadadev-da00c",
  storageBucket: "jornadadev-da00c.appspot.com",
  messagingSenderId: "809412649353",
  appId: "1:809412649353:web:68c336d19138e115d78158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;