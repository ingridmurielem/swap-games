import React, {useState} from 'react';
import {Container, Input, Button, Title} from '../../../CommonStyles/styles'
import FirebaseAuthAdapter from '../../../Adapters/FirebaseAuthAdapter'
import { useHistory } from "react-router-dom";

function RegisterView(signUpAction) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] =  useState('');

  return (
    <Container> 
      <Title>Cadastro</Title>
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

   const history = useHistory();


    const signUpSuccess = (user) => {
      console.log(user);
      history.push("/homeScreen");
      // update UI
    }

    const signUpError = (error) => {
      console.log(error);
      alert(error);
    }

    const signUpAction = (email, pass, userName) => {
      FirebaseAuthAdapter.signUp(email, pass, userName, signUpSuccess).catch(error => signUpError(error));  
    }
    
    return RegisterView(signUpAction);  
}