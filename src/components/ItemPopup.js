import React from 'react'; 
import '../Presentation/HomeFlow/styles';
import Item from '../Model/Item'

class ItemPopup extends React.Component {  
    render() {  
        return (  
        <div className='ItemPopup'>  
        <div className='popup\_inner'>  
        <button onClick={this.props.closePopup}>add</button>  
        </div>  
        </div>  
        );  
    }  
} 
  
  export default ItemPopup;
  