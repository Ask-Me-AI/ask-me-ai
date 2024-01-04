import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQNZhJXeYiwsX1QuqCdbMOfCr0-7hmjq0",
  authDomain: "askmeai-8bed7.firebaseapp.com",
  projectId: "askmeai-8bed7",
  storageBucket: "askmeai-8bed7.appspot.com",
  messagingSenderId: "1037314946169",
  appId: "1:1037314946169:web:ee4b9d8e1992595e6710a8",
  measurementId: "G-QPZBZBFDEC"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);