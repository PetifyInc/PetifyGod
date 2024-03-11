import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChYNMTZPXZCesNc722_-qATp3DVpGyIzM",
  authDomain: "petify-74618.firebaseapp.com",
  projectId: "petify-74618",
  storageBucket: "petify-74618.appspot.com",
  messagingSenderId: "444388557886",
  appId: "1:444388557886:web:05ccb912e5a69165bbfd6f",
  measurementId: "G-QGJGWTPNPP"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); // Exporta la instancia de autenticación

export default app;