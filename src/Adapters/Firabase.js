import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDaelLOrKqAxuqRDccWuniPpRILndY7fAY",
    authDomain: "swap-games.firebaseapp.com",
    databaseURL: "https://swap-games.firebaseio.com",
    projectId: "swap-games",
    storageBucket: "swap-games.appspot.com",
    messagingSenderId: "667763601801",
    appId: "1:667763601801:web:270f5a802fda0f5ade3158",
    measurementId: "G-DV8MP026S7"
    
};
firebase.initializeApp(config);
export default firebase;