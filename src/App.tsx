import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Greeting from './Greeting';

import CalendarCard from './CalendarCard';

interface IUser {
  username?: string;
}

const App = () => {
  const [user, updateUser] = useState({ username: 'Brian' });
  const Reset = createGlobalStyle`${reset}`;

  useEffect(() => {
    fetch('http://192.168.0.3:9011/codingInfo/brianalan')
      .then(data => data.json())
      .then(data => console.log(data.results));
  });

  return (
    <>
      <Reset />
      <SCheaderDiv>
        <Greeting username={user.username} />
        <CalendarCard cardType="large" wroteCode={true} />
      </SCheaderDiv>
    </>
  );
};

const SCheaderDiv = styled.header`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
