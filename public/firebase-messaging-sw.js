importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyD-RCqHUjcM2nRBfW7do8ZWnXWzqTvC35k",
  authDomain: "eserve-639ab.firebaseapp.com",
  projectId: "eserve-639ab",
  storageBucket: "eserve-639ab.firebasestorage.app",
  messagingSenderId: "345710600361",
  appId: "1:345710600361:web:1791f45ab5a32da10809b8",
  measurementId: "G-4SLS8J27MK",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
