import React, {useState} from 'react';
import {GameSubtitle, GameTitle, HorizontalStack, VerticalStack, SearchListHeader} from '../../CommonStyles/styles'
import MenuItems from './MenuItem'
import HomeSideBar from './HomeSideBar'
import Filters from './Filters'

const logoImg = require("../../images/icon.png");

function HomeView(menuItemClicked) {

  const [filter, setFilter] = useState(Filters.ITEMS);

  return (
    <>
      <VerticalStack>
        <img src={logoImg} style={{marginLeft: "25px", marginTop: "25px"}}/>
        <HorizontalStack>
          <HomeSideBar menuItemClicked={menuItemClicked} />
          <VerticalStack style={{marginTop: "35px", marginLeft: "35px"}}>
            <GameTitle>Swap game</GameTitle>
            <GameSubtitle>Trades and chats</GameSubtitle>
            <SearchListHeader>All {filter}</SearchListHeader>
          </VerticalStack>
        </HorizontalStack>
      </VerticalStack>
    </>   
   );
}

export default function HomeController() {

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

  return HomeView(handleSideBarItemClick);
}