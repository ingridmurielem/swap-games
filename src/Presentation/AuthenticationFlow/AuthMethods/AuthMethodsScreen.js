import React, {useState} from 'react';
import {Container, Input, Button, Title, VerticalStack, HorizontalStack} from '../../../CommonStyles/styles'
import FirebaseAuthAdapter from '../../../Adapters/FirebaseAuthAdapter'
import HomeSideBar from '../../HomeFlow/HomeSideBar'

function AuthMethodsView() {

  return (
    <VerticalStack> 
      <Title style ={{marginLeft: 250}}>Swap Games - Métodos de autenticação </Title>
      <HorizontalStack>
          <HomeSideBar/>
          <VerticalStack style ={{marginLeft: 100}}>
             <a href="/signInScreen"> <Button > Já possuo conta </Button> </a>
             <a href="/signUpScreen">  <Button > Me cadastrar </Button> </a>
         </VerticalStack>
       </HorizontalStack>
    </VerticalStack>   
   );
}

export default function AuthMethodsController() {
    return AuthMethodsView();
}