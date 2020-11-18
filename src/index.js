import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastraPessoa from './CadastraPessoa';
import PagHeader from './components/PagHeader';
import * as serviceWorker from './serviceWorker';
import DealsScreen from './Presentation/UserFlow/Deals/DealsScreen'
import HomeScreen from './Presentation/HomeFlow/HomeScreen'
import ProfileScreen from './Presentation/UserFlow/ProfileScreen'
import SignInScreen from './Presentation/AuthenticationFlow/Login/UserLoginScreen'
import SignUpScreen from './Presentation/AuthenticationFlow/Register/UserRegisterScreen'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cadastro" component={CadastraPessoa} />
            <Route path="/pagHeader" component={PagHeader} />
            <Route path="/deals" component={DealsScreen} />
            <Route path="/homeScreen" component={HomeScreen} />
            <Route path="/profileScreen" component={ProfileScreen} />
            <Route path="/signInScreen" component={SignInScreen} />
            <Route path="/signUpScreen" component={SignUpScreen} />
           {/* Aqui adicionamos novas rotas, novas paginas como Forum */}
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();