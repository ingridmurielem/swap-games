import firebase from './Firabase.js';

/// Fazer uma logicazinha do lado servidor utilizando Cloud functions disponibilizadas pelo firebase tbm

class FirebaseDataAdapter {
    
    getItemsList = () => {}
    getUserList = () => {}
    getChatsList = () => {}
}
  
const instance = new FirebaseDataAdapter();
Object.freeze(instance);

export default instance;