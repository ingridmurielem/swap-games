import React from "react";
import {Container, Input, Title} from './styles'
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
  handlePassChange = event => {
    this.setState({ pass: event.target.value });
  };


  render() {
    return (
    <Container> 
    <Title>Swap Games </Title>
     <Input type="email" placeholder="Informe seu email"
     value={this.state.email} onChange={this.handleEmailChange}
     />
     <Input type="password"
        minlength="8" placeholder="Informe sua senha"
     value={this.state.pass} onChange={this.handlePassChange}
     />
    <Botao variant="contained" color="secondary" href="/"
          onClick={() => {
            this.props.onClick(this.state.email, this.state.pass);
          }}
        > Adicionar </Botao>
    </Container>  
  );
}
}
export default Form;
