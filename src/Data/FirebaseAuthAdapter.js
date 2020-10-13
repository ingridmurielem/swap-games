import firebase from './Firabase.js';

export default class FirebaseAuthAdapter {

    signIn = (email, pass) => firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
        // Update user information
        console.log(user);
    });
      
    signUp = (email, pass) => firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
        // Update user information
        console.log(user);
    })
}