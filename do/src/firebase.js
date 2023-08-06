// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "yyyyyyyyyyyyyyyyyyyyyyyy",
  authDomain: "ott-platform-2fb3b.firebaseapp.com",
  projectId: "ott-platform-2fb3b",
  storageBucket: "ott-platform-2fb3b.appspot.com",
  messagingSenderId: "8014oorefioho8842",
  appId: "1:8014lkhdvisdhuishfuish8934836422e3",
  measurementId: "G-Vrihfiou4hFB7ER",
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth,provider,storage};
export default db;
