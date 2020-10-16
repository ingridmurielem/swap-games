import firebase from './Firabase.js';

import RegistredUser from '../Model/RegistredUser'
import Item from '../Model/Item'
import Chat from '../Model/Chat'
import Categories from '../Model/ItemsCategories'

/// Fazer uma logicazinha do lado servidor utilizando Cloud functions disponibilizadas pelo firebase tbm

class FirebaseDataAdapter {
    
    getAllItems = () => {
        return [ 
            new Item(1, "Console", "Muito legal", [], Categories.CONSOLE), 
            new Item(2, "Controle PS4", "Novinho", [], Categories.CONTROLE), 
            new Item(3, "Play 4", "Usei muito pouco", [], Categories.CONSOLE)  
        ];
    }
    getAllUsers = () => {
        return [ 
            new RegistredUser(1, "Douglas", "email", "password", "city", "tags"), 
            new RegistredUser(2, "Ingrid", "email", "password", "city", "tags"), 
            new RegistredUser(3, "Rafa", "email", "password", "city", "tags")  
        ];
    }
    getAllChats = () => {
        return [
            new Chat("Jogos ONLINE"),
            new Chat("Jogos PS4")
        ]
    }
}
  
const instance = new FirebaseDataAdapter();
Object.freeze(instance);

export default instance;