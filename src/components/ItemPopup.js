import React from 'react'; 
import '../App.css'
import Item from '../Model/Item'
import Popup from 'reactjs-popup'

class ItemPopup extends React.Component {  
    closeForm = () => {
        document.getElementById("myForm").style.display = "none";
      } 
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    render() {  
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
            </Popup>
        );}  
}

export default ItemPopup;