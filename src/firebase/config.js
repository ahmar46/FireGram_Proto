import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCWaCVzobo9eyA5vwNKdbyufS0-wYWZAqM",
  authDomain: "my-firegram-69482.firebaseapp.com",
  databaseURL: "https://my-firegram-69482.firebaseio.com",
  projectId: "my-firegram-69482",
  storageBucket: "my-firegram-69482.appspot.com",
  messagingSenderId: "999082392703",
  appId: "1:999082392703:web:859357e9e74c7de6ac534a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };