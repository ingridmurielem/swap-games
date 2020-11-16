import React, {useState} from 'react';
import {Container, Title} from '../../CommonStyles/styles'
import AdicionaItem from '../../components/ItemPopup'

function ProfileView() {

  return (
    <Container> 
      <Title>General chats list view</Title>
      <AdicionaItem></AdicionaItem>
    </Container>   
   );
}

export default function ProfileController() {
    return ProfileView();
}