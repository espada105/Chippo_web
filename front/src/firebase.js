import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBdkP6vRz6dwgQXgM3toj3nUGPivZCMy8",
  authDomain: "chippowebfirebase.firebaseapp.com",
  projectId: "chippowebfirebase",
  storageBucket: "chippowebfirebase.firebasestorage.app",
  messagingSenderId: "729779844868",
  appId: "1:729779844868:web:0f91f95222118d8bb64251",
  measurementId: "G-R4M19WJV3Q"
};

// Firebase 초기화를 먼저 수행
const app = initializeApp(firebaseConfig);

// 그 다음 auth 및 provider 초기화
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };