import React, {useState} from 'react';
import {Container, Input, Button, Title} from '../../../CommonStyles/styles'
import FirebaseAuthAdapter from '../../../Data/FirebaseAuthAdapter'

function RegisterView(signUpAction) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] =  useState('');

  return (
    <Container> 
      <Title>Swap Games </Title>
      <Title>{email} {pass}</Title>
      <Input type="name" placeholder="Informe seu nome"
       value={userName} onChange={e=> setUserName(e.target.value)}
       />
       <Input type="email" placeholder="Informe seu email"
       value={email} onChange={e=> setEmail(e.target.value)}
       />
       <Input type="password" placeholder="Informe sua senha"
       value={pass} onChange={e=> setPass(e.target.value)}
       />
       <Button primary onClick={() => signUpAction(email, pass, userName)}> Cadastre com e-mail agora </Button>
    </Container>   
   );
}

export default function RegisterController() {
    const firAuthAdapter = new FirebaseAuthAdapter();

    const signUpSuccess = (user) => {
      console.log(user);
      // update UI
    }

    const signUpError = (error) => {
      console.log(error);
      // update UI
    }

    const signUpAction = (email, pass, userName) => firAuthAdapter.signUp(email, pass, userName, signUpSuccess).catch(error => signUpError(error));  
    
    return RegisterView(signUpAction);  
}