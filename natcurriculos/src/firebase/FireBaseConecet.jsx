// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEMQb5FBQ_hRzbjpkQfyiBUQnnH5h99rY",
  authDomain: "natvillecurriculos.firebaseapp.com",
  projectId: "natvillecurriculos",
  storageBucket: "natvillecurriculos.appspot.com",
  messagingSenderId: "1097917840926",
  appId: "1:1097917840926:web:6c7af514e28cf03c84f80f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
