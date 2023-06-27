import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import  {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD9aChBzAQ0K94tl7DmInAwTkiJZ73nnyE",
  authDomain: "blog-26a7a.firebaseapp.com",
  projectId: "blog-26a7a",
  storageBucket: "blog-26a7a.appspot.com",
  messagingSenderId: "131142437467",
  appId: "1:131142437467:web:f0fa531a5bd50b0db40d7e",
  measurementId: "G-T3MDNWH3YW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);    

export  {Auth, Provider, db, storage, app};