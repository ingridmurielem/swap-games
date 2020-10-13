import React, {useState} from 'react';
import {Container, Input, Button, Title} from './styles'
import FirebaseAuthAdapter from '../Data/FirebaseAuthAdapter'

function LoginView({email, pass, setEmail, setPass ,signInAction, signUpAction}) {
  return (
    <Container> 
      <Title>Swap Games </Title>
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
  
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const firAuthAdapter = new FirebaseAuthAdapter();
    const signInAction = () => firAuthAdapter.signIn(email, pass);
    const signUpAction = () => firAuthAdapter.signUp(email, pass);

    return LoginView(email, pass, setEmail.bind(this), setPass.bind(this), signInAction, signUpAction);
  }