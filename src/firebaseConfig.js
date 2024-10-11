// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGqSgS664DR-87cHgtgDoNZedEuxp8sBg",
  authDomain: "projeto-school-ju-bia.firebaseapp.com",
  projectId: "projeto-school-ju-bia",
  storageBucket: "projeto-school-ju-bia.appspot.com",
  messagingSenderId: "982876512794",
  appId: "1:982876512794:web:525dd9b21c26c3d01fa7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { auth,database };