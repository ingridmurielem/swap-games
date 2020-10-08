import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastraPessoa from './CadastraPessoa';
import PagHeader from './components/PagHeader';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cadastro" component={CadastraPessoa} />
            <Route path="/pagHeader" component={PagHeader} />
           {/* Aqui adicionamos novas rotas, novas paginas como Forum */}
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();