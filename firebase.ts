import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbbp-QlHLHuLDzjxpYQLtNyjXi8Ylqumc",
  authDomain: "chartgpt-clone.firebaseapp.com",
  projectId: "chartgpt-clone",
  storageBucket: "chartgpt-clone.appspot.com",
  messagingSenderId: "629559910623",
  appId: "1:629559910623:web:38b5c114181ad73dbb896a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
