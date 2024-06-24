          
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyDKcdx51gnHFo0PJ4tH6s8eQHmTarrVpv4",
  authDomain: "mymart-dc167.firebaseapp.com",
  projectId: "mymart-dc167",
  storageBucket: "mymart-dc167.appspot.com",
  messagingSenderId: "941297691098",
  appId: "1:941297691098:web:b946c12929b038735338e3",
  measurementId: "G-SCQ78S22QT"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export {auth};