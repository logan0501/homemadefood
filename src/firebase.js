import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD3932sVbnGcB6-RaTYBQ1ZArLKCwo-lR4",
  authDomain: "customerapp-a8c18.firebaseapp.com",
  projectId: "customerapp-a8c18",
  storageBucket: "customerapp-a8c18.appspot.com",
  messagingSenderId: "507883847682",
  appId: "1:507883847682:web:e84b262716a1f7ac3e271b",
  measurementId: "G-TGP45EZ2WM"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;