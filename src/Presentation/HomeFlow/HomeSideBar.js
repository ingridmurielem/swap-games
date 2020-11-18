import React, {useState} from 'react';
import {SideBarContainer} from '../../CommonStyles/styles'
import MenuItems from './MenuItem'

const home_background = require('../../images/home_menu_item.png');
const user_background = require('../../images/user_menu_item.png');
const chats_background = require('../../images/chat_menu_item.png');
const deals_background = require('../../images/deals_menu_item.png');

export default function SideBarView(props) {
    
   return (
   
   <SideBarContainer> 
       <a href="/homeScreen"> <button> < img src={home_background} /> </button></a>
       <a href="/signInScreen"> <button> < img src={user_background} /> </button></a>
       <img src={chats_background} onClick={() => props.menuItemClicked(MenuItems.chats)}/>
       <a href="/deals"> <button> < img src={deals_background} /> </button></a>
   </SideBarContainer> 
   );   
}