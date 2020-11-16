import React, {useState} from 'react';
import {GameSubtitle, GameTitle, HorizontalStack, VerticalStack, SearchListHeader, FilterTitle} from '../../CommonStyles/styles'
import MenuItems from './MenuItem'
import HomeSideBar from './HomeSideBar'
import Filters from '../../Model/Filters'
import SourceFlow from './SourceFlow'
import ResourceList from './ResourceList'

import FirDataAdaper from '../../Adapters/FirebaseDataAdapter'
import { Radio } from '@material-ui/core';
import FirebaseAuthAdapter from '../../Adapters/FirebaseAuthAdapter';

const logoImg = require("../../images/icon.png");

function HomeView(menuItemClicked, itemsForCurrentFilter, filterItemsForSearchedText) {

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
          <Radio checked={(filter === Filters.CHATS)} title="Chat" onClick={() => setFilter(Filters.CHATS)}/>
          <FilterTitle>Chats</FilterTitle>
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
            <ResourceList dataSource={filterItemsForSearchedText(filter, searchedText)}/>
          </VerticalStack>
        </HorizontalStack>
      </VerticalStack>
    </>   
   );
}

export default function HomeController() {


  const allItems = FirDataAdaper.getAllItems().map (item => { return item.toListItem() });
  const allChats = FirDataAdaper.getAllChats().map (chat => { return chat.toListItem() });
  const allUsers = FirDataAdaper.getAllUsers().map (user => { return user.toListItem() });

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
      case Filters.CHATS: return allChats.filter(item => { return text.length === 0 ? true : item.name.toLowerCase().includes(text.toLowerCase()) });
      case Filters.ITEMS: return allItems.filter(item => { return text.length === 0 ? true : item.name.toLowerCase().includes(text.toLowerCase()) });
    }
  }

  const getItemsForCurrentFilter = (filter) => {
    switch(filter) {
      case Filters.USERS: return allUsers;
      case Filters.CHATS: return allChats;
      case Filters.ITEMS: return allItems;
    }
  }

  return HomeView(handleSideBarItemClick, getItemsForCurrentFilter, filterItemsForSearchedText);
}