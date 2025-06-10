import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export async function signUpUser(name: any, email: any, password: any) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return {
        status: "Success",
      };
    })
    .catch((error) => {
      return {
        status: "Error",
        code: error.code,
        errorMessage: error.message,
      };
    });
}

export async function signInUser(email: any, password: any) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
     console.log(user);
     return {
      status:"Success",
      accessToken:user?.stsTokenManager?.accesstoken,
      refreshToken:user?.stsTokenManager?.refreshToken,
      expirationTime:user?.stsTokenManager.expirationTime
     }
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      
    });
}
