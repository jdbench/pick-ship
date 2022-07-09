import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

 const app = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_DATABASE_URL
});
const firestore = app.firestore();
console.log(process.env.REACT_APP_FIREBASE_API_KEY)
export const database = {
  locations: firestore.collection('locations'),
  products: firestore.collection('products'),
  picklist: firestore.collection('picklist'),
  users: firestore.collection('users'),
  getCurrentTimestame: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: doc=> {
    return { id: doc.id, ...doc.data() }
  }
}
console.log(database);
export const auth = app.auth()
export default app
