import {db} from './config'
import { setDoc, doc, getDoc } from "firebase/firestore"; 
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";

export const addUser = (user)=> {
    setDoc(doc(db, "users", user.uid), {
      email: user.email,
      userName: user.userName,
      name: user.name
    })
      .then(() => {
          console.log("success, user has been added", user.uid)
      })
      .catch(err => {
          console.error("Error adding document", err)
      })
  }
export const addUserFromRedirectResult = (auth)=> {
    getRedirectResult(auth)
    .then((result) => {
     const token = GoogleAuthProvider.credentialFromResult(result)?.accessToken
     const user = result.user;
     addUser(user)
     console.log('user', user)
     console.log("token", token)
   }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     const email = error.customData.email;
     const credential = GoogleAuthProvider.credentialFromError(error);
     console.log(errorCode, errorMessage, email, credential)
     alert(error)
   });
}


export const getUserById = user => {
    console.log("get users by ID", user)
    return getDoc(doc(db, "users", user.uid))
        .then(res => {
            console.log("users document data", res.data())
            return res.data()
        })
        .catch(err => console.log("Error getting document:", err))
}