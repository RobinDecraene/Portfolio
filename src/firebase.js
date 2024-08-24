// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMTip1jK5OE8AjVzOF_XH41kJ10WzxeLU",
  authDomain: "portfolio-79f74.firebaseapp.com",
  projectId: "portfolio-79f74",
  storageBucket: "portfolio-79f74.appspot.com",
  messagingSenderId: "949169777525",
  appId: "1:949169777525:web:9c29ff837a6a7a2353013c",
  measurementId: "G-D2DM7BMT6L"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };