import React, {useState, useEffect} from 'react';
import {Container, HorizontalStack, Title, VerticalStack} from '../../../CommonStyles/styles'
import  FirDataAdapter from '../../../Adapters/FirebaseDataAdapter'
import  DealsList  from './DealsList'
import HomeSideBar from '../../HomeFlow/HomeSideBar'

function DealsView(fetchedTransactions, menuItemClicked) {

  return (
      <VerticalStack>
        <Title style={{paddingLeft: 35}}> Meus acordos </Title>
        <HorizontalStack>
        <HomeSideBar style={{position: "absolute"}} menuItemClicked={menuItemClicked} />
        <VerticalStack>
          <view style={{paddingLeft: 25}}>
            <DealsList dataSource={fetchedTransactions}/>
          </view>
        </VerticalStack>
        </HorizontalStack> 
      </VerticalStack>
   );
}

export default function DealsController() {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactionsForCurrentUser = () => {
    FirDataAdapter.getTransactionsIDsForCurrentUser(function (snapshot) {
      const transactionsIdsValue = snapshot.val();
      if(transactionsIdsValue == null || transactionsIdsValue == undefined) {
        setTransactions([]);
        return
      }
      
      const transactionsIds = Object.keys(transactionsIdsValue).map(key => key);
      
      FirDataAdapter.getTransactionsByIds(transactionsIds, function (fetchedTransactions) {
       
       console.log("AQUI DENTRO JA");
       console.log("fetched transactions");
       console.log(fetchedTransactions);
         setTransactions(fetchedTransactions);
      });
     });
  }

  const menuItemClicked = () => {

  }

  useEffect(() => { 
    fetchTransactionsForCurrentUser();
    }, []);

  return DealsView(transactions, menuItemClicked);
}