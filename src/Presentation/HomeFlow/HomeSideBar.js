import React, {useState} from 'react';
import {Container, HomeButton} from '../../CommonStyles/styles'
import FirebaseDataAdapter from '../../Adapters/FirebaseDataAdapter'
import {UserItem} from '../../images/user_menu_item.png'
import {DealsItem} from '../../images/deals_menu_item.png'
import {HomeItem} from '../../images/home_menu_item.png'
import {ChatsItem} from '../../images/chat_menu_item.png'
import { Button } from '../../CommonStyles/styles';


const home_background = require('../../images/home_menu_item.png');
const user_background = require('../../images/user_menu_item.png');
const chats_background = require('../../images/chat_menu_item.png');
const deals_background = require('../../images/deals_menu_item.png');

export default function SideBarView() {
  return (
    <Container> 
       <img src={home_background} onClick={() => {}}/>
       <img src={user_background} onClick={() => {}}/>
       <img src={chats_background} onClick={() => {}}/>
       <img src={deals_background} onClick={() => {}}/>
    </Container>   
   );
}