import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbyF2Zf3lqKe8IJKh7KPtYq-6hLME2Y00",
    authDomain: "ask-me-53110.firebaseapp.com",
    projectId: "ask-me-53110",
    storageBucket: "ask-me-53110.appspot.com",
    messagingSenderId: "121803331755",
    appId: "1:121803331755:web:7605a2b754594c5c213fee"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);