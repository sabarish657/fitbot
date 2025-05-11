// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFoVthChRb8nx2kwMRlR9ywpiqmbNzrlU",
  authDomain: "morphmatic3d.firebaseapp.com",
  projectId: "morphmatic3d",
  storageBucket: "morphmatic3d.appspot.com",
  messagingSenderId: "683418080934",
  appId: "1:683418080934:web:c10f5aae5416216a66c667",
  measurementId: "G-WPBRX1DGK9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
export default firebaseConfig; // Ensure default export of firebaseConfig
