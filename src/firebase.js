import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig ={
    apiKey: "AIzaSyBEq1bb4iExNgsJcezY4RcJSKicdhL8LEM",
    authDomain: "chat-3-cd51e.firebaseapp.com",
    projectId: "chat-3-cd51e",
    storageBucket: "chat-3-cd51e.appspot.com",
    messagingSenderId: "890519391154",
    appId: "1:890519391154:web:2c17630264f6ffa83832ab"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider}