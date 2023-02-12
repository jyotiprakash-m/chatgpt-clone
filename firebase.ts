import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9dQqStltrwymJrQQtX2IQzpQRLA-sVlQ",
  authDomain: "chartgpt-messenger.firebaseapp.com",
  projectId: "chartgpt-messenger",
  storageBucket: "chartgpt-messenger.appspot.com",
  messagingSenderId: "418511244986",
  appId: "1:418511244986:web:c430fa23d3a4bedf1e7c83",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig, "app1");
const db = getFirestore(app);

export { db };
