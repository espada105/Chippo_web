import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6dkPkvRz6dwgDXgM3toj3nUGP1vZCMy8",
    authDomain: "chippowebfirebase.firebaseapp.com",
    projectId: "chippowebfirebase",
    storageBucket: "chippowebfirebase.firebasestorage.com",
    messagingSenderId: "729779844868",
    appId: "1:729779844868:web:0f91f95222118d8bb64251",
    measurementId: "G-R4M19WJY3Q"
  };

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Auth 인스턴스 내보내기
export const auth = getAuth(app);
