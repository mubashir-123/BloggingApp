import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYyk_Qqk6u22AZwkq2lXaLx3WpSXOCWVI",
  authDomain: "bloggingapp-2ebee.firebaseapp.com",
  projectId: "bloggingapp-2ebee",
  storageBucket: "bloggingapp-2ebee.appspot.com",
  messagingSenderId: "850792105784",
  appId: "1:850792105784:web:c1c37b436d4a0e1f9363cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);