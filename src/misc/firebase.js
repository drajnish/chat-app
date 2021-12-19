import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyB1uZKMv8SpQh99hoEPHrrUcA3kmUZ8egM',
  authDomain: 'chat-web-app-94cab.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-94cab-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-94cab',
  storageBucket: 'chat-web-app-94cab.appspot.com',
  messagingSenderId: '599230125597',
  appId: '1:599230125597:web:81ff290aaa3c4cb94098f4',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
