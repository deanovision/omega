import { 
    GoogleAuthProvider, 
    getRedirectResult, 
    sendPasswordResetEmail 
} from "firebase/auth";

import { auth } from "./config";

export const redirectResult = (auth)=> {
    getRedirectResult(auth)
    .then((result) => {
     const token = GoogleAuthProvider.credentialFromResult(result)?.accessToken
     const user = result.user;
     console.log('user', user)
     console.log("token", token)
   }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     const email = error.customData.email;
     const credential = GoogleAuthProvider.credentialFromError(error);
     console.log(errorCode, errorMessage, email, credential)
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