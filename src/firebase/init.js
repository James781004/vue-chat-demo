import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDw4orphvD33QRQgcJKx9EK57fqN-2n918",
    authDomain: "chat-demo-ca713.firebaseapp.com",
    databaseURL: "https://chat-demo-ca713.firebaseio.com",
    projectId: "chat-demo-ca713",
    storageBucket: "chat-demo-ca713.appspot.com",
    messagingSenderId: "80786988257",
    appId: "1:80786988257:web:24695800fbbee9b1"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// expore firestore database
export default firebaseApp.firestore()