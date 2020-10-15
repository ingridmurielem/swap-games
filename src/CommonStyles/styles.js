  import styled from "styled-components";
  import HomeItem from "../images/home_menu_item.png"

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