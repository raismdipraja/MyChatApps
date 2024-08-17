// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDE-n9x4H5tLq5WLLTRaruWpsmkT298dwk',
  authDomain: 'mychat-c4c94.firebaseapp.com',
  databaseURL: 'https://mychat-c4c94-default-rtdb.firebaseio.com',
  projectId: 'mychat-c4c94',
  storageBucket: 'mychat-c4c94.appspot.com',
  messagingSenderId: '805639345577',
  appId: '1:805639345577:web:b5315aca7d4f31891f20b8',
  measurementId: 'G-FR22C8SD3F',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
