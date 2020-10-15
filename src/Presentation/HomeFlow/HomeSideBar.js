import React, {useState} from 'react';
import {SideBarContainer} from '../../CommonStyles/styles'

const home_background = require('../../images/home_menu_item.png');
const user_background = require('../../images/user_menu_item.png');
const chats_background = require('../../images/chat_menu_item.png');
const deals_background = require('../../images/deals_menu_item.png');

export default function SideBarView(props) {
    
   return (
   
   <SideBarContainer> 
    <img src={home_background} onClick={() => this.props.homeAreaClick}/>
    <img src={user_background} onClick={() => this.props.userAreaClick}/>
    <img src={chats_background} onClick={() => this.props.chatsAreaClick}/>
    <img src={deals_background} onClick={() => this.props.dealsAreaClick}/>

   </SideBarContainer> 
   
   );   
}