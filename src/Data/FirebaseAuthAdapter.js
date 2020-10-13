import firebase from './Firabase.js';

export default class FirebaseAuthAdapter {

    signIn = (email, pass, errorHandling) => firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
  
        console.log(user);
    }).catch(console.log("deu ruim"));
      
    signUp = (email, pass, errorHandling) => firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
       
        console.log(user);
    })
}