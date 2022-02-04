import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCrTOLU3whw-U5RC2oUnRSE8z-TZG9IupU",
  authDomain: "crwn-db-45d79.firebaseapp.com",
  projectId: "crwn-db-45d79",
  storageBucket: "crwn-db-45d79.appspot.com",
  messagingSenderId: "125158261999",
  appId: "1:125158261999:web:78e1a4bec02a9f179e471a",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
