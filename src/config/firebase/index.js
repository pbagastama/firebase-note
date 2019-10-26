import firebase from 'firebase/app';
import 'firebase/auth'; 
// import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWA2uDJpC08pXTNM5lcwI7viP29R8TYaU",
    authDomain: "fir-simple-note.firebaseapp.com",
    databaseURL: "https://fir-simple-note.firebaseio.com",
    projectId: "fir-simple-note",
    storageBucket: "",
    messagingSenderId: "4215939609",
    appId: "1:4215939609:web:f485759bea78c9b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;