import React, { useEffect, useState } from 'react';
import { ItemCategoryText, MakeOfferButton, VerticalStack, ItemNameText, Container, Title, ChooseItemForTradeButton, GameSubtitle } from '../../CommonStyles/styles';
import Filters from '../../Model/Filters';
import Item from '../../Model/Item';
import Popup from 'reactjs-popup'
import FirDataAdaper from '../../Adapters/FirebaseDataAdapter'
import { AlertTitle } from '@material-ui/lab';
import Transaction from '../../Model/Transaction/Transaction';
import TransactionStatus from '../../Model/Transaction/TransactionStatus';

import firebase from '../../Adapters/Firabase'

function MyItemsListElement(props) {
    return (
        <>
         <ItemNameText>Nome do item: {props.myItem.name} </ItemNameText>
         <ItemCategoryText>Categoria: {props.myItem.category}</ItemCategoryText>
         <ChooseItemForTradeButton onClick={() => { 
             if(props.currentItem.ownerID == firebase.auth().currentUser.uid) {
                 alert("Você já é o dono desse jogo");
             } else {
                props.startTransaction(props.currentItem, [props.myItem])
             }
            }}> Escolher item </ChooseItemForTradeButton>
        </>
    );
}

function RenderMyItensList(props) {

    const [myItems, setMyItems] = useState([]);

    useEffect(() => { 
        FirDataAdaper.getCurrentUserItemsIDs(function(itemsIDs) {
          if(itemsIDs == null || itemsIDs == undefined) {
              return
          }
          FirDataAdaper.getItemsByIds(itemsIDs, function(items) {
            setMyItems(items);
          })
        });
    }, []);
    
    return (
        <Container>
            { myItems.map(myItem => { return <MyItemsListElement myItem = {myItem} currentItem = {props.currentItem} startTransaction = {props.startTransaction} /> }) }
        </Container>
    );
}



function createMakeOfferButtonWithPopUpAction(props) {
   return <Popup
   overlayStyle={{background: 'rgba(52, 52, 52, 0.8)'}}
    trigger={<MakeOfferButton primary>Fazer uma oferta</MakeOfferButton>}
    modal
    nested
  >
    { close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <Title> Selecione o item que deseja dar em troca:</Title>
        <div className="content">
          {' '}
          <VerticalStack>
            <AlertTitle>Meus itens:</AlertTitle>
            {RenderMyItensList({currentItem: props.currentItem, startTransaction: props.startTransaction})}
          </VerticalStack>
        </div>
        <div className="actions">
        </div>
      </div>
    )}
  </Popup>
}

function solveCurrentFilterComponents(props) {
    if(props.filter == Filters.ITEMS) {
        return <> 
         <ItemCategoryText>Categoria: {props.currentItem.category}</ItemCategoryText>
         {createMakeOfferButtonWithPopUpAction({currentItem: props.currentItem, startTransaction: props.startTransaction})}
        </>
    } else {
        return <> </>
    }
}

export default function ListItem(props) {
    // Correct! There is no need to specify the key here:
    console.log(props.item);
    return( 
        <view style={{marginBottom: 15}}>
          <VerticalStack>
          <ItemNameText>Item: {props.item.name}</ItemNameText>
            {solveCurrentFilterComponents({filter: props.filter, currentItem: props.item, startTransaction: props.startTransaction})}
           </VerticalStack> 
        </view>
        );
  }