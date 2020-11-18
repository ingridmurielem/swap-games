import ListItem from './DealsListItem'
import React from 'react';
import DealsListItem from './DealsListItem';

export default function DealsList(props) {
    // Correct! There is no need to specify the key here:
    if(props.dataSource === undefined) { return  <ul></ul> }
    console.log("Datasource");
    console.log(props.dataSource);
    return props.dataSource.map(transaction => { return <DealsListItem transaction = {transaction}/> });
}