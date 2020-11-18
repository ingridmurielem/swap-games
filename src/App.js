import React from 'react';
import HomeScreen from './Presentation/HomeFlow/HomeScreen'
import RegisterScreen from './Presentation/AuthenticationFlow/Register/UserRegisterScreen'
import LoginScreen from './Presentation/AuthenticationFlow/Login/UserLoginScreen'
import DealsScreen from './Presentation/UserFlow/Deals/DealsScreen'
import AuthMethodsController from './Presentation/AuthenticationFlow/AuthMethods/AuthMethodsScreen'

import './App.css';
import HomeController from './Presentation/HomeFlow/HomeScreen';

function App() {
  return (
    <div >
        <LoginScreen/>
    </div>  
  );
}

export default App;
