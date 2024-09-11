// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBViDp1LW0yPfUPTUZOec2mnfLUk6tfzsk",
  authDomain: "fir-9e7c1.firebaseapp.com",
  projectId: "fir-9e7c1",
  storageBucket: "fir-9e7c1.appspot.com",
  messagingSenderId: "930117433167",
  appId: "1:930117433167:web:3f03104f3addb8d23a373a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;