import { initializeApp } from 'firebase/app';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrVHc_siaSQzqPrQmWRrHE1LFqB86MaLk",
  authDomain: "clone-c18ce.firebaseapp.com",
  projectId: "clone-c18ce",
  storageBucket: "clone-c18ce.appspot.com",
  messagingSenderId: "1062748112728",
  appId: "1:1062748112728:web:abf37b575ce87e3cd8472d",
  measurementId: "G-GH9L81CSGK"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut };