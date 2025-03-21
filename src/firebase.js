import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp_lc_qTw7gjF_lvTuKtSUtsja9mLoAXg",
  authDomain: "netflix-clone-18502.firebaseapp.com",
  projectId: "netflix-clone-18502",
  storageBucket: "netflix-clone-18502.firebasestorage.app",
  messagingSenderId: "670017295024",
  appId: "1:670017295024:web:7c34da6a147ece006fa175",
  measurementId: "G-EMMKKVSWJY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, login, signup, logOut };
