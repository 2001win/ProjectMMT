import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyART6Xh2wCGcMUIVBiWNuhHSOCuWBden48",
  authDomain: "fir-login-f4214.firebaseapp.com",
  projectId: "fir-login-f4214",
  storageBucket: "fir-login-f4214.appspot.com",
  messagingSenderId: "128485261005",
  appId: "1:128485261005:web:f3740579872d0e719f7384",
  measurementId: "G-R4NZ9SMXN6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
