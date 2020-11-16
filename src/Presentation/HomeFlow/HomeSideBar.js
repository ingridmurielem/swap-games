import React, {useState} from 'react';
import {SideBarContainer,Button} from '../../CommonStyles/styles'
import MenuItems from './MenuItem'

const home_background = require('../../images/home_menu_item.png');
const user_background = require('../../images/user_menu_item.png');
const chats_background = require('../../images/chat_menu_item.png');
const deals_background = require('../../images/deals_menu_item.png');

export default function SideBarView(props) {
    
   return (
   
   <SideBarContainer> 
    <img src={home_background} onClick={() => props.menuItemClicked(MenuItems.home)}/>
    <a href="/cadastro"> <button> < img src={user_background} /> </button></a>
    <img src={chats_background} onClick={() => props.menuItemClicked(MenuItems.chats)}/>
    <img src={deals_background} onClick={() => props.menuItemClicked(MenuItems.deals)}/>

   </SideBarContainer> 
   
   );   
}