import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyATIupUxFRRH84OEDSnUNz-YP-PMqpAu3M",
    authDomain: "roudainet-trainer-a59d4.firebaseapp.com",
    databaseURL: "https://roudainet-trainer-a59d4-default-rtdb.firebaseio.com",
    projectId: "roudainet-trainer-a59d4",
    storageBucket: "roudainet-trainer-a59d4.appspot.com",
    messagingSenderId: "476329869783",
    appId: "1:476329869783:web:6aa0a842c98eb826ddcb92",
  };
  initializeApp(firebaseConfig);

  const isEmulating = window.location.hostname === "localhost";
  if (isEmulating) {
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");

    const db = getFirestore();
    connectFirestoreEmulator(db, "localhost", 8080);

    const functions = getFunctions();
    connectFunctionsEmulator(functions, "localhost", 5001);
  }
});
