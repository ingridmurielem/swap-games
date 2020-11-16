import firebase from './Firabase.js';

import RegistredUser from '../Model/RegistredUser'
import Item from '../Model/Item'
import Chat from '../Model/Chat'
import Categories from '../Model/ItemsCategories'
import FirAuth from './FirebaseAuthAdapter'
import Transaction from '../Model/Transaction/Transaction.js';
import transitions from '@material-ui/core/styles/transitions';
import TransactionStatus from '../Model/Transaction/TransactionStatus'

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

    getItemsByIds = async(itemsIDs, callback) => {

        var itemObjects = {};
        var finalItems = [];

        const promises = itemsIDs.map(async (itemID) => {
             await firebase.database().ref("items").child(itemID).once('value', snapshot => {
                itemObjects[itemID] = snapshot.val();
            });
        });

        await Promise.all(promises);

        Object.keys(itemObjects).forEach(itemID => {
            const newItem = Item.fromJson(itemID, itemObjects[itemID]);
            finalItems.push(newItem);
        });

        console.log(finalItems);

        callback(finalItems);
    }

    getTransactionsIDsForCurrentUser = async(callback) => {
        
        firebase.database()
            .ref("users")
            .child("3K36t2dOIhY6p5uAJKK2RLlpjof1")
            .child("transactions")
            .once('value', callback);
    }

    getTransactionsByIds = async (transactionsIDs, callback) => {

        var transactionsObjects = {};
        var finalTransactions = [];

        console.log(transactionsIDs);

        const promises = transactionsIDs.map(async (transactionID) => {
             await firebase.database().ref("transactions").child(transactionID).once('value', snapshot => {
                transactionsObjects[transactionID] = snapshot.val();
            });
        });

        await Promise.all(promises);

        Object.keys(transactionsObjects).forEach( transactionID => {
            console.log(transitions[transactionID]);
            const newTransaction = Transaction.fromJson(transactionID, transactionsObjects[transactionID]);
            finalTransactions.push(newTransaction);
        });

        console.log(finalTransactions);

        callback(finalTransactions);
    }

    setTransactionStatus = (transactionID, transactionStatus) => {
        firebase.database()
            .ref("transactions")
            .child(transactionID)
            .child("status")
            .set(transactionStatus);
    }
}
  
const instance = new FirebaseDataAdapter();
Object.freeze(instance);

export default instance;