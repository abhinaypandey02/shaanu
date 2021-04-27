import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAkDR8E37SRQpSUb8FSp2pGN-evjDS8XwQ",
    authDomain: "carplus-9c574.firebaseapp.com",
    projectId: "carplus-9c574",
    storageBucket: "carplus-9c574.appspot.com",
    messagingSenderId: "774854724842",
    appId: "1:774854724842:web:b825b7b6393d34dc4d9b93",
    measurementId: "G-Y8KREREGST"
  };
const fire=  firebase.initializeApp(firebaseConfig);
export default fire;
