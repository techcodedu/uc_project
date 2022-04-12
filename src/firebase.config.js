// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9FaQYM2-lEC-AsIdcCTlEdaIehKRXlZ0",
  authDomain: "irish-project-39113.firebaseapp.com",
  projectId: "irish-project-39113",
  storageBucket: "irish-project-39113.appspot.com",
  messagingSenderId: "453138132888",
  appId: "1:453138132888:web:2fe695949efb72280585ed",
  measurementId: "G-GWCTV0QQBC",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
