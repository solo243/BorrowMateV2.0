// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUNnLvOuBs25ROQpVwIjVmRQJ8AqBLWdM",
//   authDomain: "borrowbuddyv2.firebaseapp.com",
//   projectId: "borrowbuddyv2",
//   storageBucket: "borrowbuddyv2.firebasestorage.app",
//   messagingSenderId: "728970126373",
//   appId: "1:728970126373:web:048dd6cccb6fae07690bcc"
// };

// // Initialize Firebase


import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUNnLvOuBs25ROQpVwIjVmRQJ8AqBLWdM",
  authDomain: "borrowbuddyv2.firebaseapp.com",
  projectId: "borrowbuddyv2",
  storageBucket: "borrowbuddyv2.appspot.com",
  messagingSenderId: "728970126373",
  appId: "1:728970126373:web:048dd6cccb6fae07690bcc"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };
