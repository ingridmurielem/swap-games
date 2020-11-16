import React, {useState, useEffect} from 'react';
import {Container, Title} from '../../../CommonStyles/styles'
import  FirDataAdapter from '../../../Adapters/FirebaseDataAdapter'
import  DealsList  from './DealsList'

function DealsView(fetchedTransactions) {

  return (
    <Container> 
      <DealsList dataSource={fetchedTransactions}/>
    </Container>   
   );
}

export default function DealsController() {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactionsForCurrentUser= () => {
    FirDataAdapter.getTransactionsIDsForCurrentUser(function (snapshot) {
      FirDataAdapter.getTransactionsByIds(snapshot.val(), function (fetchedTransactions) {
        setTransactions(fetchedTransactions);
      });
     });
  }

  useEffect(() => { 
    fetchTransactionsForCurrentUser();
    }, [])

  return DealsView(transactions);
}