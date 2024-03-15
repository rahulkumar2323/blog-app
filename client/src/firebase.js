// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-appp-5db0d.firebaseapp.com",
  projectId: "blog-appp-5db0d",
  storageBucket: "blog-appp-5db0d.appspot.com",
  messagingSenderId: "1096978073057",
  appId: "1:1096978073057:web:2908755ad9647f5784bea0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
