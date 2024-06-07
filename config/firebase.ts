// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDUwoOY7_gc-z_4aRlhwrdsKVqVQLw8y8k",
  authDomain: "mindparents-ffd3b.firebaseapp.com",
  databaseURL:
    "https://mindparents-ffd3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mindparents-ffd3b",
  storageBucket: "mindparents-ffd3b.appspot.com",
  messagingSenderId: "608879645505",
  appId: "1:608879645505:web:3991c8102171c1540ac7c0",
  measurementId: "G-236WCF49ME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app); 

export { auth, db, provider, storage }; 
