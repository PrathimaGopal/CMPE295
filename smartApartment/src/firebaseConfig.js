import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQcHd9fYg8DneiTk5m7eTvJl7p532PUOE',
  authDomain: 'smartapartmentcommunity.firebaseapp.com',
  projectId: 'smartapartmentcommunity',
  storageBucket: 'smartapartmentcommunity.appspot.com',
  messagingSenderId: '850314466835',
  appId: '1:850314466835:web:3044a3dba90560200b11e6',
  measurementId: 'G-3TKPK1RYLE',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.fireStore();

export { db };
