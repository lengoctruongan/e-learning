import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import SignUp from './screens/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <SignUp/>
    </div>
  );
}

export default App;
