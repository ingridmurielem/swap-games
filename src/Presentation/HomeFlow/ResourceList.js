import ListItem from './ResourceListItem'
import React from 'react';

export default function ResourceList(props) {
    // Correct! There is no need to specify the key here:
    if(props.dataSource === undefined) { return  <ul></ul> }
    console.log("filtered");
    console.log(props);
    return props.dataSource.map(item => { return <ListItem item = {item} filter = {props.filter} startTransaction={props.startTransaction}/> });
  }