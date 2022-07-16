import { 
    GoogleAuthProvider, 
    getRedirectResult, 
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "./config";
import {getUserById} from './userModel'
export const redirectResult = (auth)=> {
    getRedirectResult(auth)
    .then((result) => {
     const token = GoogleAuthProvider.credentialFromResult(result)?.accessToken
     const user = result.user;
     console.log('user', user)
     console.log("token", token)
     return user
   }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     const credential = GoogleAuthProvider.credentialFromError(error);
     console.log(errorCode, errorMessage, credential)
   });
}

export const resetPassword = (auth, email, setError) => {
    sendPasswordResetEmail(auth, email)
    .then((res) => {
        console.log("reset email sent", res)
        setError("")
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(`${errorMessage}`)
    });

}

export const getAuthorizedUser = () => {

  onAuthStateChanged(auth, (user) => {
        if (user) {
          getUserById(user)
            .then(res => {
              console.log(res)
              return res
            })
            .catch(err => console.log(err.message))
        } 
        else {
          console.log("user is signed out")
        }
      });
}
export const logout = (e, setAuthorized) => {
    e.preventDefault()
    signOut(auth).then((res) => {
      setAuthorized(false)
      console.log(res, "success")
    }).catch((error) => {
      console.log(error, "error")
    });
  }