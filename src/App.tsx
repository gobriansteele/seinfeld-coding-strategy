import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Greeting from './Greeting';
import CalendarCard from './Calendar/CalendarCard';
import { convertApiResponseToCalendarArray } from './Calendar/calendarInfo';

interface IUser {
  username?: string;
}

const App = () => {
  const [user] = useState<IUser>({ username: 'Brian' });
  const [calendarDays, updateCalendarDays] = useState<any>(null);
  const Reset = createGlobalStyle`${reset}`;

  useEffect(() => {
    fetch('http://192.168.0.3:9011/codingInfo/brianalan')
      .then(data => data.json())
      .then(data => {
        const formattedData = convertApiResponseToCalendarArray(data.results);
        updateCalendarDays(formattedData);
      });
  }, []);

  return (
    <>
      <Reset />
      <SCheaderDiv>
        <Greeting username={user.username ? user.username : ''} />
        {calendarDays && calendarDays.length && (
          <CalendarCard cardType="large" cardInfo={calendarDays[0]} />
        )}
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
