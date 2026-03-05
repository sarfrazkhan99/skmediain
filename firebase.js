// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCpUbsfI37JhcpnYVFkDAIvtn2AzwzM",
  authDomain: "skmediain-c7991.firebaseapp.com",
  projectId: "skmediain-c7991",
  storageBucket: "skmediain-c7991.appspot.com",
  messagingSenderId: "121601764922",
  appId: "1:121601764922:web:8c689cd985f9dac3f28f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Database
export const db = getFirestore(app);
