  import styled from "styled-components";
  import HomeItem from "../images/home_menu_item.png"

  export const SideBarContainer =  styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 25px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const FilterTitle = styled.text`
    font-weight: regular;
    color: #000000;
    margin-top: 10px;
    font-size: 15px;
 `;

export const SearchListHeader = styled.text`
    font-weight: regular;
    color: #000000;
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const GameTitle = styled.text`
    font-weight: bold;
    color: #000000;
    font-size: 35px;
 `;

export const ItemCategoryText = styled.text`
    font-weight: medium;
    color: #000000; 
    font-size: 15px;
`;

export const ItemNameText = styled.text`
    font-weight: bold;
    color: #000000; 
    font-size: 15px;
`;

 export const GameSubtitle = styled.text`
    font-weight: medium;
    color: #000000;
    font-size: 25px;
 `;


 export const DealsListItemText = styled.text`
 font-weight: medium;
 color: #000000;
 font-size: 25px;
`;

 export const HorizontalStack = styled.div`
 display: flex;
 align-items: flex-start;
 flex-direction: row;
`;

export const VerticalStack = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
`;

export const Container =  styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Input = styled.input`
    padding: 10px;
    width: 350px;
    height: 40px;
    border: none;
    background: #ecf0f1;
    border-radius: 3px;
    margin: 5px;
`;

export const HomeButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-image: url(${HomeItem}); 
    margin: 10px;
    font-weight: bold;
`; 


export const Button = styled.button`
    padding: 10px;
    width: 360px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "palevioletred" : "#9b59b6" };;
    color: #fff;
    margin: 10px;
    font-weight: bold;
`; 

export const Title = styled.p`
    font-weight: bold;
    color: #9b59b6;
    font-size: 22px;
    `;

    export const SubjectTitleDealsList = styled.p`
    font-weight: bold;
    color: #4b10b9;
    font-size: 18px;
    `;



export const AcceptDealButton = styled.button `
    padding: 10px;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: "#09B141"
    color: #fff;
    margin: 10px;
    font-weight: bold;
`;

export const DeclineDealButton = styled.button `
padding: 10px;
width: 200px;
height: 50px;
border: none;
border-radius: 8px;
background: "#E8505B"
color: #fff;
margin: 10px;
font-weight: bold;
`;

export const TalkThroughWhatsappButton = styled.button `
padding: 10px;
width: 200px;
height: 50px;
border: none;
border-radius: 8px;
background: "#B79B0C"
color: #fff;
margin: 10px;
font-weight: bold;
`;

export const MakeOfferButton = styled.button `
padding: 10px;
width: 200px;
height: 50px;
border: none;
border-radius: 8px;
background: ${props => props.primary ? "palevioletred" : "#9b59b6" };;
color: #ffffff;
marginTop: 10px;
font-weight: bold;
`;

export const ChooseItemForTradeButton = styled.button `
padding: 10px;
width: 200px;
height: 50px;
border: none;
border-radius: 8px;
background: ${props => props.primary ? "palevioletred" : "#9b59b6" };;
color: #ffffff;
marginTop: 10px;
font-weight: bold;
`;