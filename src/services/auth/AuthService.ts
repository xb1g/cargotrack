// import * as firebase from "firebase";
import { onSnapshot, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
// import { db } from "../../../firebaseConfig";

export const loginRequest = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutRequest = () => signOut(auth);

export const registerRequest = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

// export const getUserInfo = (uid: string) => {
//   return onSnapshot(doc(db, "users", uid), (u) => {
//     // console.log(u.data());
//     // u.data() && setUserInfo(u.data());
//     const userInfo = u.data();
//     // console.log(userInfo);
//   });
// };