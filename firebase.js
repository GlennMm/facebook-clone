// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa2NRnCy5YzrxNR0dXGSghnHuc5BpeN7o",
  authDomain: "fb-clone-a7da5.firebaseapp.com",
  projectId: "fb-clone-a7da5",
  storageBucket: "fb-clone-a7da5.appspot.com",
  messagingSenderId: "69189667580",
  appId: "1:69189667580:web:22d09e5827736b138e6579"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)

const storage = getStorage()

export { db, storage }
