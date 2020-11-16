import React from 'react';
import HomeScreen from './Presentation/HomeFlow/HomeScreen'
import RegisterScreen from './Presentation/AuthenticationFlow/Register/UserRegisterScreen'
import LoginScreen from './Presentation/AuthenticationFlow/Login/UserLoginScreen'
import DealsScreen from './Presentation/UserFlow/Deals/DealsScreen'

import './App.css';

function App() {
  return (
    <div >
        <DealsScreen/>
    </div>  
  );
}

export default App;
