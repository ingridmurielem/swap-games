import React, { useState } from 'react'; 
import '../App.css'
import Item from '../Model/Item'
import Popup from 'reactjs-popup'
import FirDataAdapter from '../Adapters/FirebaseDataAdapter'
import { Container, HorizontalStack } from '../CommonStyles/styles';


function ItemPopUpView() {
  return ( 
    <Popup overlayStyle={{background: 'rgba(52, 52, 52, 0.8)'}} trigger={<button> Adicionar Item </button>} modal nested>
        <div class="popup" >
            <div className='popup_inner'>
                <form onSubmit="return enviar();" class="form-container">
                    <h1>Adiciona Item</h1>
                
                    <label for="nome"><b>Nome</b></label>
                    <input type="text" placeholder="Entre com o nome" id="nome" required/>
                
                    <label for="description"><b>Descrição</b></label>
                    <input type="text" placeholder="Entre com a descrição" id="description" required/>

                    <label for="category"><b> Categoria</b></label>

                    <select name="select" id='category'>
                    <option value="Jogo" selected>Jogo</option> 
                    <option value="Mouse" >Mouse</option>
                    <option value="Headset">Headset</option>
                    <option value="Console">Console</option> 
                    <option value="Controle" >Controle</option>
                    <option value="Outro">Outro</option>
                    </select>
                
                    <button type="submit" class="btn" >Adicionar</button>
                    <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
                    </form>
                </div>
        </div>
    </Popup>);
}

 function ItemPop_Up(props) {


  const updateName = (name) => {
    console.log(name);
  }

  const updateDescription = (description) => {
    console.log(description);
  }

  const submitItem = () => {
    //const itemName = this.name.value;
    //const itemDescription = this.description.value;
    //const itemCategory = "Jogo"; // mudar pára pegar valor real
    
   // const item = new Item(undefined, itemName, itemDescription, [], itemCategory, undefined, false);
   // props.saveItemToFirebse(item);
  }

  return (
    <Container>
       <h1>Adiciona Item</h1>
      <HorizontalStack>
                  
          <label for="nome"><b>Nome</b></label>
            <input type="text" ref={el => console.log(el.value)} placeholder="Entre com o nome" id="nome" required/>
  
            <label for="description" ><b>Descrição</b></label>
            <input type="text" ref={el => console.log(el.value)} placeholder="Entre com a descrição" id="description" required/>

            <label for="category"><b> Categoria</b></label>

            <select name="select" id='category'>
             <option value="Jogo">Jogo</option> 
             <option value="Mouse" >Mouse</option>
             <option value="Headset">Headset</option>
             <option value="Console">Console</option> 
             <option value="Controle" >Controle</option>
             <option value="Outro">Outro</option>
            </select>
              
           <input type="submit" value="Submit" onClick={() => submitItem()}/>
           </HorizontalStack>
      </Container>
      );
}

class ItemPopup extends React.Component {
    constructor() {
        super();
        this.category = "Jogo"
        this.submitItem = this.submitItem.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    submitItem(){
      const itemName = this.name.value;
      const itemDescription = this.description.value;
      const itemCategory = "Jogo"; // mudar pára pegar valor real
      
      const item = new Item(undefined, itemName, itemDescription, [], itemCategory, undefined, false);
      this.props.saveItemToFirebse(item);
    }

    handleCategoryChange(event) {
      this.category = event.target.value;
    }

    render() {
      return (
        <Container>
           <h1>Adiciona Item</h1>
          <HorizontalStack>
                      
              <label for="nome"><b>Nome</b></label>
                <input type="text" ref={el => this.name = el} placeholder="Entre com o nome" id="nome" required/>
      
                <label for="description" ><b>Descrição</b></label>
                <input type="text" ref={el => this.description = el} placeholder="Entre com a descrição" id="description" required/>
    
                <label for="category"><b> Categoria</b></label>
    
                <select name="select" id='category'>
                 <option value="Jogo">Jogo</option> 
                 <option value="Mouse" >Mouse</option>
                 <option value="Headset">Headset</option>
                 <option value="Console">Console</option> 
                 <option value="Controle" >Controle</option>
                 <option value="Outro">Outro</option>
                </select>
                  
               <input type="submit" value="Submit" onClick={() => this.submitItem()}/>
               </HorizontalStack>
          </Container>
          );
    }
}

export default ItemPopup