import React, { useState, useEffect } from 'react';
import Greeting from './Greeting';
import Answer from './Answer';
import ChainCounter from './ChainCounter';
import Button from './Button';
import './App.css';

interface IUser {
  username?: string;
}

const App = () => {
  const [user, updateUser] = useState({} as IUser);

  return (
    <div className="App">
      <header className="App-header">
        <Greeting username="Brian" />
        <Answer />
        <ChainCounter />
      </header>
    </div>
  );
};

export default App;
