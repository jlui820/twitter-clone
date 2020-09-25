import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBkhVMLw5uO2LLwMZ46YyrknBgR--6K-oc",
  authDomain: "twitter-clone-2b3bf.firebaseapp.com",
  databaseURL: "https://twitter-clone-2b3bf.firebaseio.com",
  projectId: "twitter-clone-2b3bf",
  storageBucket: "twitter-clone-2b3bf.appspot.com",
  messagingSenderId: "595903731262",
  appId: "1:595903731262:web:8957fafeefda3042b1e36f",
  measurementId: "G-0RG819JR05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;