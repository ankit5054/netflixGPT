import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";

export async function signUpUser(name: any, email: any, password: any) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name, // pass the name variable here
      });
      return {
        status: "Success",
        accessToken: (user as any)?.stsTokenManager?.accessToken,
        refreshToken: (user as any)?.stsTokenManager?.refreshToken,
        displayName: name,
        email: (user as any)?.email,
        uid: (user as any)?.uid,
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
      return {
        status: "Success",
        accessToken: (user as any)?.stsTokenManager?.accessToken,
        refreshToken: (user as any)?.stsTokenManager?.refreshToken,
        displayName: (user as any)?.displayName,
        email: (user as any)?.email,
        uid: (user as any)?.uid,
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        status: "Error",
      };
    });
}

export async function signOutUser() {
  return await signOut(auth).then().catch();
}
