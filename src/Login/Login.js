import React, {useState} from 'react';
import {Container, Input, Button, Title} from './styles'
import Botao from '@material-ui/core/Button';
import firebase from '/Users/ingridmurielem/Projetos/FACULDADE/swap-routes/swap-routes/src/Data/Firabase.js';

export default function Login() {
  
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const emailCadastrado = 'maria@gmail.com'
    const password = '12345678'
  
    const login = () => {
      firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
        if (setEmail === emailCadastrado  && setPass === password) {
            function Oi() {
                return (
                  <div >
                      <Button> oi </Button>
                  </div>
                
                );
            }   
        }
    })
    }
    
    const cadastro = () => {
      firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
       return (
        <Button> oi </Button>
       );
      })
    }
  
  
    return (
     <Container> 
       <Title>Swap Games </Title>
        <Input type="email" placeholder="Informe seu email"
        value={email} onChange={e=> setEmail(e.target.value)}
        />
        <Input type="password" id="pass" name="password"
           minlength="8" requiredplaceholder="Informe sua senha"
        value={pass} onChange={e=> setPass(e.target.value)}
        />
        <Button onClick={login}> Entrar com e-mail agora </Button>
        <Botao href="/cadastro" variant= "contained" color="secondary"> Cadastre com e-mail agora </Botao>
     </Container>   
    );
  }