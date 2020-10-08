import React from "react";
import Botao from '@material-ui/core/Button';
import {Container, Input, Title} from './styles'
import {withRouter} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePassChange(event) {
    this.setState({pass: event.target.value});
  }

  handleSubmit(event) {
    const {email, pass} = this.state 
    alert (`Seus valores de estado:  
    email: ${email}       
    pass: ${pass} `) 
    this.props.history.push('/pagHeader');
    event.preventDefault();
  }
  render() {
    return (
      <Container> 
      <Title>Swap Games </Title>
      <div>
      <form onSubmit={this.handleSubmit}>
      <Input type="email" placeholder="Informe seu email"
      value={this.state.email} onChange={this.handleEmailChange}
       />
      <Input type="password"
      minlength="8" placeholder="Informe sua senha"
      value={this.state.pass} onChange={this.handlePassChange}
      />
      <Input type="submit" value="Enviar" />
      <a href='/cadastro' value ="Cadastrar com email"> Cadastrar com email </a>
      </form>
      </div>
      </Container>
    );
  }
}
export default withRouter (Login);
