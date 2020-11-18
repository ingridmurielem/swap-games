import React, {useState , useEffect} from 'react';
import {GameSubtitle, GameTitle, HorizontalStack, VerticalStack, SearchListHeader, FilterTitle} from '../../CommonStyles/styles'
import MenuItems from './MenuItem'
import HomeSideBar from './HomeSideBar'
import Filters from '../../Model/Filters'
import SourceFlow from './SourceFlow'
import ResourceList from './ResourceList'
import Transaction from '../../Model/Transaction/Transaction'
import TransactionStatus from '../../Model/Transaction/TransactionStatus'
import firebase from '../../Adapters/Firabase'

import FirDataAdaper from '../../Adapters/FirebaseDataAdapter'
import { Radio } from '@material-ui/core';
import FirebaseAuthAdapter from '../../Adapters/FirebaseAuthAdapter';
import transitions from '@material-ui/core/styles/transitions';
import { database } from 'firebase';

const logoImg = require("../../images/icon.png");

function HomeView(menuItemClicked, itemsForCurrentFilter, filterItemsForSearchedText, startTransaction) {

  const [filter, setFilter] = useState(Filters.ITEMS);
  const [searchedText, setSearchedText] = useState('');

  console.log(searchedText);
  return (
    <>
      <VerticalStack>
        <HorizontalStack>
        <img src={logoImg} style={{marginLeft: "25px", marginTop: "25px"}}/>
        <SourceFlow dataSource={itemsForCurrentFilter(filter)} searchedTextValueDidChange={(textNewValue) => {setSearchedText(textNewValue)}}/>
        <HorizontalStack style={{marginTop: "65px", marginLeft: "35px"}} >
          <Radio checked={(filter === Filters.ITEMS)} title="Items" onClick={() => setFilter(Filters.ITEMS)}/>
          <FilterTitle>Items</FilterTitle>
          <Radio checked={(filter === Filters.USERS)} title="Users" onClick={() => setFilter(Filters.USERS)}/>
          <FilterTitle>Users</FilterTitle>
        </HorizontalStack>
        </HorizontalStack>
        <HorizontalStack>
          <HomeSideBar menuItemClicked={menuItemClicked} />
          <VerticalStack style={{marginTop: "35px", marginLeft: "35px"}}>
            <GameTitle>Swap game</GameTitle>
            <GameSubtitle>Trades and chats</GameSubtitle>
            <SearchListHeader>All {filter}</SearchListHeader>
            <ResourceList dataSource={filterItemsForSearchedText(filter, searchedText)} filter={filter} startTransaction={startTransaction}/>
          </VerticalStack>
        </HorizontalStack>
      </VerticalStack>
    </>   
   );
}

export default function HomeController() {


  const [allItems, setAllItems] = useState([]);

  const allUsers = FirDataAdaper.getAllUsers();

  const handleSideBarItemClick = (menuItem) => {
    switch(menuItem) {
      case MenuItems.profile: console.log(MenuItems.profile);
      break;
      case MenuItems.chats: console.log(MenuItems.chats);
      break;
      case MenuItems.deals: console.log(MenuItems.deals);
      break;
      case MenuItems.home: console.log(MenuItems.home);
      break;
    }
  }

  const filterItemsForSearchedText = (filter, text) => {
    
    switch(filter) {
      case Filters.USERS: return allUsers.filter(item => { return text.length === 0 ? true : item.name.toLowerCase().includes(text.toLowerCase()) });
      case Filters.ITEMS: return allItems.filter(item => { return text.length === 0 ? true : item.name.toLowerCase().includes(text.toLowerCase()) });
    }
  }

  const getItemsForCurrentFilter = (filter) => {
    switch(filter) {
      case Filters.USERS: return allUsers;
      case Filters.ITEMS: return allItems;
    }
  }

  const startTransaction = (item, tradeOff) => {
    const itemID = item.id;
    const itemOwnerID = item.ownerID;
    const greetingsText = "Oi! Vamos trocar esses itens?"
    const buyerID = firebase.auth().currentUser.uid;

    const tradeOffItemsIds = tradeOff.map(item => item.id);

    const transaction = new Transaction(undefined, TransactionStatus.RUNNING, itemID, tradeOffItemsIds, buyerID, itemOwnerID, greetingsText);
    FirDataAdaper.startTransaction(transaction, error => {
      if(error == undefined) {
        console.log("SUCCESSO");
        alert("Uma transação foi criada! Acesse a aba de transações para ver mais detalhes");
      } else {
        console.log(error);
      }
    })
    console.log(transaction);
    console.log("comecou transaction");
  }

  useEffect(() => { 
    FirDataAdaper.getAllItems(function(items) {
      setAllItems(items);
    });
  
    }, []);

  return HomeView(handleSideBarItemClick, getItemsForCurrentFilter, filterItemsForSearchedText, startTransaction);
}