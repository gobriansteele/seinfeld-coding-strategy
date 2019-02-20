import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Greeting from './Greeting';
import Answer from './Answer';
import ChainCounter from './ChainCounter';
import Tracker from './Tracker';

interface IUser {
  username?: string;
}

const App = () => {
  const [user, updateUser] = useState({ username: 'Brian' });
  useEffect(() => {
    setTimeout(() => {
      updateUser({ username: 'Jackie' });
    }, 3000);
  }, []);
  return (
    <SCappDiv>
      <SCheaderDiv>
        <Greeting username={user.username} />
        <Answer />
        <ChainCounter />
        <Tracker />
      </SCheaderDiv>
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
    </SCappDiv>
  );
};

const SCappDiv = styled.div`
  text-align: center;
`;

const SCheaderDiv = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
