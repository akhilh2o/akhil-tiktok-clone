// import firebase from 'firebase';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBzSm-QQft2dd-fJV1cyTu6K9UvzxHLils",
  authDomain: "akhil-tiktok-clone.firebaseapp.com",
  databaseURL: "https://akhil-tiktok-clone.firebaseio.com",
  projectId: "akhil-tiktok-clone",
  storageBucket: "akhil-tiktok-clone.appspot.com",
  messagingSenderId: "36331286272",
  appId: "1:36331286272:web:d4c74afde351dbf7690de5",
  measurementId: "G-49RLMB6CFM"
};
const firebaseApp =
  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;