import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjA6tIHHGNrvGEnn5pdeAPa7BJ78U1HPs",
  authDomain: "react-auth-b696c.firebaseapp.com",
  projectId: "react-auth-b696c",
  storageBucket: "react-auth-b696c.appspot.com",
  messagingSenderId: "8283846514",
  appId: "1:8283846514:web:119a38014e93c5b86e4feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
