import firebase from './Firabase.js';

 class FirebaseAuthAdapter {

    signIn = (email, pass, successHandler) => firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
        successHandler(user);
    })
      
    signUp = (email, pass, userName, successHandler) => firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
        successHandler(user);
        this.updateUserProfile(userName);
    })

    matchCurrentUserID = (userID) => { 
        console.log(firebase.auth().currentUser.uid);
        return (firebase.auth().currentUser.uid == userID); }

    updateUserProfile = (userName) => firebase.auth().currentUser.updateProfile({ displayName: userName });

    //getCurrentUserID = () => firebase.auth().currentUser.uid;
}

const instance = new FirebaseAuthAdapter();
Object.freeze(instance);

export default instance;