// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOi_5gowAeo0z9ARCETev39Rj5KcT9VAc",
  authDomain: "sentiment-analysis-2025.firebaseapp.com",
  projectId: "sentiment-analysis-2025",
  storageBucket: "sentiment-analysis-2025.firebasestorage.app",
  messagingSenderId: "286942235461",
  appId: "1:286942235461:web:6cb445b73c277776378c2c",
  measurementId: "G-9WKSTLE06V",
};

// ✅ Avoid re-initializing during hot reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Initialize services
export const auth = getAuth(app);
