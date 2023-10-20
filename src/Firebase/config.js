import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
   apiKey: "AIzaSyCwBSx3nQ5nARAHQN-6nWMrQxWxFyXtfr0",
   authDomain: "search-6ae21.firebaseapp.com",
   projectId: "search-6ae21",
   storageBucket: "search-6ae21.appspot.com",
   messagingSenderId: "348399834388",
   appId: "1:348399834388:web:b8d2da895592ac63c81e01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);