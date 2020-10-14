import firebase from './Firabase.js';

export default class FirebaseAuthAdapter {

    signIn = (email, pass, successHandler) => firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
        successHandler(user);
    })
      
    signUp = (email, pass, userName, successHandler) => firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
        successHandler(user);
        this.updateUserProfile(userName);
    })

    updateUserProfile = (userName) => firebase.auth().currentUser.updateProfile({ displayName: userName });
}