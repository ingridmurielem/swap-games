import React, {useState} from 'react';
import {Container, Title} from '../CommonStyles/styles'
import FirebaseDataAdapter from '../../Adapters/FirebaseDataAdapter'

function HomeView() {

  return (
    <Container> 
      <Title>Home screen</Title>
    </Container>   
   );
}

export default async function HomeController() {
  
  const itemsList = await FirebaseDataAdapter.getItemsList(); 
  const chatsList = await FirebaseDataAdapter.getChatsList();
  const userList = await FirebaseDataAdapter.getUserList();

  // filter logic

  return HomeView();
}