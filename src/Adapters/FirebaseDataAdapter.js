import firebase from './Firabase.js';

import RegistredUser from '../Model/RegistredUser'
import Item from '../Model/Item'
import Chat from '../Model/Chat'
import Categories from '../Model/ItemsCategories'
import FirAuth from './FirebaseAuthAdapter'
import Transaction from '../Model/Transaction/Transaction.js';
import transitions from '@material-ui/core/styles/transitions';
import TransactionStatus from '../Model/Transaction/TransactionStatus'

import { v4 as uuidv4 } from 'uuid';

/// Fazer uma logicazinha do lado servidor utilizando Cloud functions disponibilizadas pelo firebase tbm

class FirebaseDataAdapter {
    

    getAllItems = async (callback) => {
        
        var finalItems = [];
        var itemObjects = [];

        await firebase.database().ref("items").once('value', snapshot => {
            itemObjects = snapshot.val();
        });

        Object.keys(itemObjects).forEach(itemID => {
            const newItem = Item.fromJson(itemID, itemObjects[itemID]);
            finalItems.push(newItem);
        });

        console.log(finalItems);

        callback(finalItems);
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

    getCurrentUserItemsIDs = async(callback) => {

        firebase.auth().onAuthStateChanged((user)=>{
            firebase.database().ref("users").child(user.uid).child("items").once('value', function (snapshot) {
                const ids = snapshot.val();
                if(ids === undefined) {
                    callback([]);
                } else {
                    callback(Object.keys(ids).map(key => key));
                }
            });
        })
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
        
        firebase.auth().onAuthStateChanged((user)=>{
            firebase.database()
            .ref("users")
            .child(user.uid)
            .child("transactions")
            .once('value', callback);
    
        })
    }

    getTransactionsByIds = async (transactionsIDs, callback) => {

        var transactionsObjects = {};
        var finalTransactions = [];

        console.log(transactionsIDs);

        const promises = transactionsIDs.map(async (transactionID) => {
             await firebase.database().ref("transactions").child(transactionID).once('value', snapshot => {
                 console.log("Transaction ");
                 console.log(snapshot.val());
                transactionsObjects[transactionID] = snapshot.val();
            });
        });

        await Promise.all(promises);

        Object.keys(transactionsObjects).forEach( transactionID => {
            console.log(transactionsObjects[transactionID]);
            const newTransaction = Transaction.fromJson(transactionID, transactionsObjects[transactionID]);
            console.log(newTransaction)
            finalTransactions.push(newTransaction);
        });

        console.log(finalTransactions);
        //console.log(finalTransactions);

        callback(finalTransactions);
    }

    setTransactionStatus = (transactionID, transactionStatus) => {
        firebase.database()
            .ref("transactions")
            .child(transactionID)
            .child("status")
            .set(transactionStatus);
    }

    startTransaction = async (transaction, onComplete) => {
       
        const uuid = uuidv4();
       
        await firebase.database()
            .ref("transactions")
            .child(uuid)
            .set(transaction.toJson(), onComplete);

            await firebase.database()
            .ref("users")
            .child(transaction.ownerID)
            .child("transactions")
            .child(uuid).set(uuid);

            await firebase.database()
            .ref("users")
            .child(transaction.buyerID)
            .child("transactions")
            .child(uuid).set(uuid);
    }
}
  
const instance = new FirebaseDataAdapter();
Object.freeze(instance);

export default instance;