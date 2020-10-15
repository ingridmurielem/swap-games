import React from 'react';
import {Container, Title} from './styles'
import SourceFlow from './SourceFlow'
import FirebaseDataAdapter from '../../Adapters/FirebaseDataAdapter'

function HomeView() {

  return (
    <Container> 
      <Title>Home screen</Title>
      <SourceFlow></SourceFlow>
     
    </Container>   
   );
}

export default function HomeController() { 
  return HomeView();
}