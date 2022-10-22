import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5_n7jkwouZvWDacZny7_UAWTuhj7qO0Q",
  authDomain: "bluedev-nitshack.firebaseapp.com",
  projectId: "bluedev-nitshack",
  storageBucket: "bluedev-nitshack.appspot.com",
  messagingSenderId: "329741802778",
  appId: "1:329741802778:web:f1a1acebaa04fc4353e0a3",
  measurementId: "G-1DLK2743WQ",
};

export const app = initializeApp(firebaseConfig);
