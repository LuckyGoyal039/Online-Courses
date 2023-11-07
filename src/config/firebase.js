
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoDEFaRXB9ClN9vkG7IY3TsCSifbp7uD0",
  authDomain: "online-courses-62ba5.firebaseapp.com",
  projectId: "online-courses-62ba5",
  storageBucket: "online-courses-62ba5.appspot.com",
  messagingSenderId: "777552647619",
  appId: "1:777552647619:web:81fc8200e6c67034e51976",
  measurementId: "G-DM2M9GH7CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);