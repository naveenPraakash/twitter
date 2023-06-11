// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJRpNnQ58jUZytYo0A7KqdKESUZBLOOVU",
    authDomain: "twitter-clone-f9845.firebaseapp.com",
    projectId: "twitter-clone-f9845",
    storageBucket: "twitter-clone-f9845.appspot.com",
    messagingSenderId: "77166026092",
    appId: "1:77166026092:web:62417d4c50319f9ce3e749",
    measurementId: "G-XZ0P1RR22S"
  };

 

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
    

  export default db;