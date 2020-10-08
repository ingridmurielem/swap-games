import React from "react";
import {Container, Input, Title} from './styles'
import Botao from '@material-ui/core/Button';

class Login {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        pass: ''
      };
    }

    handleSubmit = ( event ) => { 
      event.preventDefault (); 
      const {email, pass} = this.state 
      alert (`Seus valores de estado:  n 
      email: $ {email}  n 
      pass: $ {pass} `) 
    }
    handleEmailChange = event => {
      this.setState({ email: event.target.value });
    };
  
    handlePassChange = event => {
      this.setState({ pass: event.target.value });
    };
   
    render() {
    return (
     <Container > 
       <Title>Swap Games </Title>
       <form onSubmit = {this.handleSubmit}> 
        <Input type="email" placeholder="Informe seu email"
        value={this.state.email}
        onChange={this.handleEmailChange}
        />
        <Input type="password"
        minlength="8" placeholder="Informe sua senha"
        value={this.state.pass}
        onChange={this.handlePassChange}
        />
        <button type = "submit" className = "btn btn-sucesso btn-block"> Enviar </ button> 
        <Botao href="/cadastro" variant= "contained" color="secondary"> Cadastre com e-mail agora </Botao>
        </form>
     </Container>   
    );
  }
}
export default Login;