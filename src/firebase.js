import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCp9A8Nn5rCu9ixpJ7vsBMvYe8aZvmy0mw",
  authDomain: "twitter-clone-fb46a.firebaseapp.com",
  projectId: "twitter-clone-fb46a",
  storageBucket: "twitter-clone-fb46a.appspot.com",
  messagingSenderId: "340487481761",
  appId: "1:340487481761:web:bbf30a307d7f8836cf43e0",
  measurementId: "G-JX5KNBG0TW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
