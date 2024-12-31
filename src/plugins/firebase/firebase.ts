import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD-RCqHUjcM2nRBfW7do8ZWnXWzqTvC35k",
  authDomain: "eserve-639ab.firebaseapp.com",
  projectId: "eserve-639ab",
  storageBucket: "eserve-639ab.firebasestorage.app",
  messagingSenderId: "345710600361",
  appId: "1:345710600361:web:1791f45ab5a32da10809b8",
  measurementId: "G-4SLS8J27MK",
};

const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

const getFCMToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
    });
    if (token) {
      return token;
    }
  } catch (error) {
    console.log("Error retrieving FCM token:", error);
  }
};

export { messaging, getToken, getFCMToken };
