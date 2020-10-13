import React, {useState} from 'react';
import {Container, Input, Button, Title} from '../CommonStyles/styles'
import FirebaseAuthAdapter from '../Data/FirebaseAuthAdapter'

function LoginView(signInAction) {

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
    </Container>   
   );
}

export default function LoginController() {
    const firAuthAdapter = new FirebaseAuthAdapter();
    const signInAction = (email, pass) => firAuthAdapter.signIn(email, pass);      
    return LoginView(signInAction);
}