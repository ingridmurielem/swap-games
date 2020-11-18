import { colors } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { Container, HorizontalStack, VerticalStack, DealsListItemText, AcceptDealButton, DeclineDealButton, TalkThroughWhatsappButton, SubjectTitleDealsList } from '../../../CommonStyles/styles';
import  FirDataAdapter from '../../../Adapters/FirebaseDataAdapter'
import Item from '../../../Model/Item';
import FirAuthAdapter from '../../../Adapters/FirebaseAuthAdapter';
import TransactionStatus from '../../../Model/Transaction/TransactionStatus';

function RenderButtonsForTransactionState(props) {

    if(props.state == TransactionStatus.RUNNING) {
        if(props.imTheItemOwner) {
            return (
            <>
             <AcceptDealButton onClick={() => props.changeTransactionStatus(TransactionStatus.DONE)} style={{visibility: props.imTheItemOwner}}>Aceitar acordo</AcceptDealButton>
             <DeclineDealButton onClick={() => props.changeTransactionStatus(TransactionStatus.CANCELED)}>Recusar acordo</DeclineDealButton>
            </>
            )
        } else {
            return <DeclineDealButton onClick={() => props.changeTransactionStatus(TransactionStatus.CANCELED)}>Recusar acordo</DeclineDealButton>
        }
    } else  {
        return <></>
    }

}

function DealsListItemView(props) {


    const decideBuyer = () => {
        if(FirAuthAdapter.matchCurrentUserID(props.transaction.buyerID)) { return "Eu mesmo" }  else { return props.transaction.buyerID }
    }

    return (
    <Container> 
        <VerticalStack>
            <SubjectTitleDealsList> De: { decideBuyer()} </SubjectTitleDealsList>
            <DealsListItemText> Mensagem: {props.transaction.greetingsText} </DealsListItemText>
            <DealsListItemText> Status: {props.transactionStatus}</DealsListItemText>
            <DealsListItemText> Item solicitado [Nome]: {props.item.name} </DealsListItemText>
            <DealsListItemText> Oferta [Nome]: {props.tradeOff.map(item => { return item.name })} </DealsListItemText>
            <HorizontalStack>
                <TalkThroughWhatsappButton >Conversar pelo whatsapp</TalkThroughWhatsappButton>
                { RenderButtonsForTransactionState( { state: props.transactionStatus, imTheItemOwner: props.imTheItemOwner, changeTransactionStatus: props.changeTransactionStatus} ) }
            </HorizontalStack>
        </VerticalStack>  
    </Container>
    );
}

export default function DealsListItem(props) {

    const [requestedItem, setRequestedItem] = useState(Item.emptyItem());
    const [tradeOff, setTradeOff] = useState([]);
    const [transactionStatus, setTransactionStatus] = useState(props.transaction.status);

    const imTheItemOwner = FirAuthAdapter.matchCurrentUserID(props.transaction.ownerID);

    const fetchRequestedItem = async () => {
        FirDataAdapter.getItemsByIds([props.transaction.itemID], function(items) {
            console.log("Requested item");
            const item = items[0]
            if(item != undefined) setRequestedItem(item);
        });
    }

    const fetchTradeOff = async () => {
        FirDataAdapter.getItemsByIds(props.transaction.tradeOff, function(items) {
            console.log("Tradeoff");
            setTradeOff(items);
        });
    }

    const changeTransactionStatus = (transactionStatus) => {
        FirDataAdapter.setTransactionStatus(props.transaction, transactionStatus);
        setTransactionStatus(transactionStatus);
    }

    useEffect(() => { 
        fetchRequestedItem();
        fetchTradeOff();
        }, [])


    return DealsListItemView( { transactionStatus: transactionStatus, item: requestedItem, tradeOff: tradeOff, transaction: props.transaction, imTheItemOwner: imTheItemOwner, changeTransactionStatus} ); 
    
}