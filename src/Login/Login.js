import React, {useState} from 'react';
import {Container, Input, Button, Title} from './styles'
import FirebaseAuthAdapter from '../Data/FirebaseAuthAdapter'

function LoginView(signInAction, signUpAction) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
       <Button onClick={() => signInAction(email, pass)}> Entrar com e-mail agora </Button>
       <Button primary onClick={() => signUpAction(email, pass)}> Cadastre com e-mail agora </Button>
    </Container>   
   );
}


export default function LoginController() {

    const firAuthAdapter = new FirebaseAuthAdapter();

    const signInAction = (email, pass) => {
      console.log(email, pass);
      firAuthAdapter.signIn(email, pass);
      
    }
    const signUpAction = (email, pass) => {
      console.log(email, pass);
      firAuthAdapter.signUp(email, pass);
    }

    return LoginView(signInAction, signUpAction);
  }