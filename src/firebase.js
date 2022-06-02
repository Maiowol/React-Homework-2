// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAD9M20xtArfnEb8hXDDMrADQ14_I96n4",
  authDomain: "react-basic-b5b69.firebaseapp.com",
  projectId: "react-basic-b5b69",
  storageBucket: "react-basic-b5b69.appspot.com",
  messagingSenderId: "523186110571",
  appId: "1:523186110571:web:501cb7c35364df5e90b12e",
  measurementId: "G-V39M4BJS4S"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore();