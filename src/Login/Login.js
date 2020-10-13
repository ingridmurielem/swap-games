import React, {useState} from 'react';
import {Container, Input, Button, Title} from './styles'
import FirebaseAuthAdapter from '../Data/FirebaseAuthAdapter'

function LoginView({initialEmail, initialPass, signInAction, signUpAction}) {

  let [email, setEmail] = React.useState(initialEmail);
  let [pass, setPass] = React.useState(initialPass);

  return (
    <Container> 
      <Title>Swap Games </Title>
      <Title>{email} {pass}</Title>
       <Input type="email" placeholder="Informe seu email"
       value={email} onChange={e=> setEmail(e.target.value)}
       />
       <Input type="password" placeholder="Informe sua senha"
       value={pass} onChange={e=> setPass(e.target.value)}
       />
       <Button onClick={signInAction}> Entrar com e-mail agora </Button>
       <Button primary onClick={signUpAction}> Cadastre com e-mail agora </Button>
    </Container>   
   );
}


export default function LoginController() {

    let email = '';
    let pass = '';
    
    const firAuthAdapter = new FirebaseAuthAdapter();
    const signInAction = () => {
      email = 'ENTROUUU AQUI - SIGN in'
      console.log(email, pass);
      
    }
    const signUpAction = () => {
      email = 'ENTROUUU AQUI - SIGN up'
      console.log(email, pass);
      firAuthAdapter.signUp(email, pass);
    }

    return LoginView(email, pass, () => signInAction, () => signUpAction);
  }