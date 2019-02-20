import React from 'react';
import styled from 'styled-components';

interface IProps {
  sevenDayInfo: boolean[];
}

const CalendarRow: React.FunctionComponent<IProps> = ({ sevenDayInfo }) => {
  return (
    <>
      {sevenDayInfo.map((day, index) => {
        const SCcalendarSquareDiv = getSquareStyles(day);
        return <SCcalendarSquareDiv key={index} />;
      })}
    </>
  );
};

const getSquareStyles = (day: boolean) => {
  return styled.div`
    width: 53px;
    height: 53px;
    border: 1px solid rgba(131, 131, 131, 1);
    background: ${() => {
      return day ? `green` : `red`;
    }};
  `;
};

export default CalendarRow;
