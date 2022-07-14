import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const storage = getStorage(app)

export const addUser = (user)=> {
  setDoc(collection(db, "users", user.uid), {
    email: user.email,
    photoURL: user.photoURL,
    name: user.displayName? user.displayName : null
  })
    .then(res => {
        console.log("Document written with", res)
    })
    .catch(err => {
        console.error("Error adding document", err)
    })
}

