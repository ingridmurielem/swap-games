import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Botao from '@material-ui/core/Button';
import './UserForm.css'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handleTelefoneChange = event => {
    this.setState({ pass: event.target.value });
  };


  render() {
    return (
    <div className = 'UserForm'>
    <div className = 'AppColor' >
        Email:
        <input
          data-testid="input-email"
          type="text"
          value={this.state.email}
          onChange={this.handleEmail}
        />
       Pass:
        <input
          data-testid="input-telefone"
          type="password"
          value={this.state.pass}
          onChange={this.handlepass}
        />
       
        <Botao variant="contained" color="primary"
          text="Adicionar"
          onClick={() => {
            this.props.onClick(this.state.email, this.state.pass);
          }}
          href ="/"
        > Adicionar </Botao>
      </div>
    </div> 
    );
  }
}
export default Form;
