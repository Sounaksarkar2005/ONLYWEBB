import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDvqShogVokAbCgYH0ExamnnqRhbC2Vx8",
  authDomain: "onlywebb-352b8.firebaseapp.com",
  projectId: "onlywebb-352b8",
  storageBucket: "onlywebb-352b8.firebasestorage.app",
  messagingSenderId: "135041287868",
  appId: "1:135041287868:web:e2c49a2717810cfc7832b9",
  measurementId: "G-M7CCKE2VMB"
};

// Initialize Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics conditionally (browser environment support check)
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Ignore analytics init error in non-browser envs
  });
}

export default app;
