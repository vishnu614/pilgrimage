// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCWXRVAj0dn8QBp0cxg9CMwxWExdHCTuxU",
  authDomain: "pilgrimage11-d306c.firebaseapp.com",
  projectId: "pilgrimage11-d306c",
  storageBucket: "pilgrimage11-d306c.appspot.com",
  messagingSenderId: "523885173583",
  appId: "1:523885173583:web:7f77825800202988d0833a",
  measurementId: "G-XXZK70Q45W"
};
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
  export default firebase;