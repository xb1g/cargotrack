// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyChlgkE9g7OKWy7GgoholvLCvfnNW1rQZk",
// //   authDomain: "cargotrack-c9714.firebaseapp.com",
// //   projectId: "cargotrack-c9714",
// //   storageBucket: "cargotrack-c9714.appspot.com",
// //   messagingSenderId: "1050508288073",
// //   appId: "1:1050508288073:web:6abb52d84bcacb015d1f98",
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyChlgkE9g7OKWy7GgoholvLCvfnNW1rQZk",
//   authDomain: "cargotrack-c9714.firebaseapp.com",
//   projectId: "cargotrack-c9714",
//   storageBucket: "cargotrack-c9714.appspot.com",
//   messagingSenderId: "1050508288073",
//   appId: "1:1050508288073:web:72247347f9adf0e55d1f98",
// };

// // if (!firebase.apps.length) {
// const firebaseApp = initializeApp(firebaseConfig);

// export const db = getFirestore(firebaseApp);
// export const auth = getAuth(firebaseApp);
// // export const storage = getStorage(firebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPOdaOCSHdlqTqWIDALfvhIBI34gsiEM4",
  authDomain: "cargotrack-845c0.firebaseapp.com",
  projectId: "cargotrack-845c0",
  storageBucket: "cargotrack-845c0.appspot.com",
  messagingSenderId: "150433452611",
  appId: "1:150433452611:web:3a9648cb2d4912a341baf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
