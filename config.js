import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhAb2u7728sVYmrEDb5uaRUtUXUrDvnQU",
  authDomain: "bedtimestories-5705d.firebaseapp.com",
  databaseURL: "https://bedtimestories-5705d-default-rtdb.firebaseio.com",
  projectId: "bedtimestories-5705d",
  storageBucket: "bedtimestories-5705d.appspot.com",
  messagingSenderId: "153418302838",
  appId: "1:153418302838:web:09575f9bb11c5bd9146657"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   