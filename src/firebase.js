import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_2n7HVswgoBdJBOJOxTVHaiR4yfcWqmo",
  authDomain: "video-59645.firebaseapp.com",
  projectId: "video-59645",
  storageBucket: "video-59645.appspot.com",
  messagingSenderId: "404630989411",
  appId: "1:404630989411:web:38dc20bda5c69ce08ca656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;