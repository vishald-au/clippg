import firebase from 'firebase/app' 
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaw4dCzUsiAcFiHy8XATxQLc39CLvNa5g",
    authDomain: "clippg-23d6f.firebaseapp.com",
    projectId: "clippg-23d6f",
    storageBucket: "clippg-23d6f.appspot.com",
    messagingSenderId: "283382974393",
    appId: "1:283382974393:web:65bc616b8740899e14d868"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectStorage, projectFirestore, timestamp }