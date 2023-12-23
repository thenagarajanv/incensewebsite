// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIxx7bAEKY-VIU43nQbXAFrdff5pIlJ5k",
  authDomain: "mern-incense-website.firebaseapp.com",
  projectId: "mern-incense-website",
  storageBucket: "mern-incense-website.appspot.com",
  messagingSenderId: "238071579502",
  appId: "1:238071579502:web:275ec1cab499df250c777f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);