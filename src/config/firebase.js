import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoDEFaRXB9ClN9vkG7IY3TsCSifbp7uD0",
  authDomain: "online-courses-62ba5.firebaseapp.com",
  projectId: "online-courses-62ba5",
  storageBucket: "online-courses-62ba5.appspot.com",
  messagingSenderId: "777552647619",
  appId: "1:777552647619:web:81fc8200e6c67034e51976",
  measurementId: "G-DM2M9GH7CC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  const userData = signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
  return userData;
};

const Logout = () => {
  signOut(auth)
    .then(() => {
      console.log("logout successfully...");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { googleSignIn, Logout, app };
