import React, {useEffect, useState} from 'react';
import {Container, HorizontalStack, Title, VerticalStack, Button, ItemNameText, ItemCategoryText} from '../../CommonStyles/styles'
import AdicionaItem from '../../components/ItemPopup'
import FirDataAdapter from '../../Adapters/FirebaseDataAdapter'
import firebase from '../../Adapters/Firabase.js';
import HomeSideBar from '../HomeFlow/HomeSideBar'

import { v4 as uuidv4 } from 'uuid';


const UserAuthState = {
  loading: "loading",
  authenticated: "authenticated",
  notAuthenticated: "notAuthenticated",
}

function MyItemsListElement(props) {
  return (
      <>
       <ItemNameText>Nome do item: {props.myItem.name} </ItemNameText>
       <ItemCategoryText>Categoria: {props.myItem.category}</ItemCategoryText>
       <Button onClick={() => {
         props.removeItemFromFirebase(props.myItem.id);
          }}> Remover item </Button>
      </>
  );
}

function RenderItemsList(props) {

  const [myItems, setMyItems] = useState([]);

  useEffect(() => { 
    FirDataAdapter.getCurrentUserItemsIDs(function(itemsIDs) {
        if(itemsIDs == null || itemsIDs == undefined) {
            return
        }
        FirDataAdapter.getItemsByIds(itemsIDs, function(items) {
          setMyItems(items);
        })
      });
  }, []);
  
  return (
      <VerticalStack style={{paddingLeft: 30, paddingTop: 15}}>
          { myItems.map(myItem => { return <MyItemsListElement myItem = {myItem} removeItemFromFirebase = {props.removeItemFromFirebase} /> }) }
      </VerticalStack>
  );
}



function ProfileView(saveItemToFirebse, removeItemFromFirebase, userAuth) {

  if(userAuth == UserAuthState.notAuthenticated)  {
    return AuthMethodsView();
  } else if(userAuth == UserAuthState.authenticated) {
    return (
      <VerticalStack> 
        <Title style = {{marginLeft: 25}} >Profile Screen</Title>
        <HorizontalStack>
         <HomeSideBar style={{position: "absolute"}}/>
         <VerticalStack>
            <AdicionaItem saveItemToFirebse={saveItemToFirebse} ></AdicionaItem>
            <RenderItemsList removeItemFromFirebase={removeItemFromFirebase} />
         </VerticalStack>
        </HorizontalStack>
      </VerticalStack>   
     );
  } else {
    return <></>
  }
}

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

export default function ProfileController() {

   const saveItemToFirebse = (item) => {
    const uuid = uuidv4();
  
    FirDataAdapter.saveItemForCurrentUser(item, error => {
      if(error != null || error != undefined) {
        alert(error);
      } else {
        alert("Novo item adicionado! Recarregue a página!");
      }
    });
   }

   const removeItemFromFirebase = (itemID) => {
    FirDataAdapter.removeItemFromFirebase(itemID, error => {
      if(error != null || error != undefined) {
        alert(error);
      } else {
        alert("Item excluido");
      }
    });
   }
 
   return ProfileView(saveItemToFirebse, removeItemFromFirebase, UserAuthState.authenticated);
   
}