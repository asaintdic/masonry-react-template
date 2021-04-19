import firebase from 'firebase/app';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC7rWVrDuaZ6y0QD51X015GbeBUso5fNcY",
  authDomain: "masonrysl.firebaseapp.com",
  projectId: "masonrysl",
  storageBucket: "masonrysl.appspot.com",
  messagingSenderId: "268491880355",
  appId: "1:268491880355:web:dfffc9abd38db16990cc16"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };