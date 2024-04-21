// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbfGj100J9kJqZo1xfZOp8-E528DWBQKc",
  authDomain: "benayon-f916d.firebaseapp.com",
  projectId: "benayon-f916d",
  storageBucket: "benayon-f916d.appspot.com",
  messagingSenderId: "420447666397",
  appId: "1:420447666397:web:effc433e088786eefc5b34",
  measurementId: "G-24986GE92D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);