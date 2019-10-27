import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/database'; 
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCWA2uDJpC08pXTNM5lcwI7viP29R8TYaU",
    authDomain: "fir-simple-note.firebaseapp.com",
    databaseURL: "https://fir-simple-note.firebaseio.com",
    projectId: "fir-simple-note",
    storageBucket: "fir-simple-note.appspot.com",
    messagingSenderId: "4215939609",
    appId: "1:4215939609:web:f485759bea78c9b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;