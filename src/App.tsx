import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Header from './Header/Header';
import Streak from './Streak';
import CalendarCard from './Calendar/CalendarCard';
import {
  convertApiResponseToCalendarArray,
  getCodingStreak,
  ICalendarDay,
  sortArrayOfCalendarDays,
  getArrayOfNonActiveDays
} from './Calendar/calendarInfo';

interface IUser {
  username?: string;
}

const App = () => {
  const [user] = useState<IUser>({ username: 'Brian' });
  const [calendarDays, updateCalendarDays] = useState<any>(null);
  const [activeDay, updateActiveDay] = useState<ICalendarDay | null>(null);
  const [nonActiveDays, updateNonActiveDays] = useState<ICalendarDay[] | null>(
    null
  );
  const Reset = createGlobalStyle`${reset}`;

  useEffect(() => {
    fetch('http://192.168.0.3:9011/codingInfo/brianalan')
      .then(data => data.json())
      .then(data => {
        const formattedData = convertApiResponseToCalendarArray(data.results);
        if (formattedData && formattedData.length) {
          updateCalendarDays(
            sortArrayOfCalendarDays(formattedData as ICalendarDay[])
          );
        } else {
          updateCalendarDays(formattedData);
        }
      });
  }, []);

  useEffect(() => {
    if (calendarDays && calendarDays.length) {
      updateActiveDay(calendarDays[0]);
    } else {
      if (calendarDays) updateActiveDay(calendarDays);
    }
  }, [calendarDays]);

  useEffect(() => {
    if (activeDay && calendarDays) {
      updateNonActiveDays(getArrayOfNonActiveDays(activeDay, calendarDays));
    }
  }, [activeDay, calendarDays]);

  return (
    <>
      <Reset />
      <Header username={user.username} />
      <SCBodyDiv>
        <Streak streak={6} />
        {activeDay && <CalendarCard cardType="large" cardInfo={activeDay} />}
        {nonActiveDays && (
          <SCNonActiveDiv>
            {nonActiveDays.map((nonActiveDay, key) => {
              return (
                <CalendarCard
                  cardType="small"
                  cardInfo={nonActiveDay}
                  key={key}
                />
              );
            })}
          </SCNonActiveDiv>
        )}
      </SCBodyDiv>
    </>
  );
};

const SCBodyDiv = styled.div`
  background-color: #fff;
  min-height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const SCNonActiveDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  max-width: 480px;
`;

export default App;
