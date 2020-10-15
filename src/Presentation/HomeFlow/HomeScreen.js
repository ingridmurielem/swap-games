import React, {useState} from 'react';
import {GameSubtitle, GameTitle, HorizontalStack, VerticalStack} from '../../CommonStyles/styles'
import FirebaseDataAdapter from '../../Adapters/FirebaseDataAdapter'
import HomeSideBar from './HomeSideBar'

function HomeView() {

  return (
    <>
      <HorizontalStack>
        <HomeSideBar homeAreaClick={() => {}} userAreaClick={() => {}} chatsAreaClick={() => {}} dealsAreaClick={() => {}}/>
        <VerticalStack style={{marginTop: "15px"}}>
          <GameTitle>Swap game</GameTitle>
          <GameSubtitle>Trades and chats</GameSubtitle>
        </VerticalStack>
      </HorizontalStack>
    </>   
   );
}

export default function HomeController() {




  return HomeView();
}