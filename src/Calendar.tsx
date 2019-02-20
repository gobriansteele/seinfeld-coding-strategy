import React from 'react';
import styled from 'styled-components';
import CalendarRowContainer from './CalendarRow';

const testInfo = [true, true, false, true, false, true, true];

const Calendar: React.FunctionComponent = () => {
  return (
    <>
      <SCcalendarDiv>
        <CalendarRowContainer sevenDayInfo={testInfo} />
      </SCcalendarDiv>
      <SCcalendarDiv>
        <CalendarRowContainer sevenDayInfo={testInfo} />
      </SCcalendarDiv>
      <SCcalendarDiv>
        <CalendarRowContainer sevenDayInfo={testInfo} />
      </SCcalendarDiv>
      <SCcalendarDiv>
        <CalendarRowContainer sevenDayInfo={testInfo} />
      </SCcalendarDiv>
    </>
  );
};

const SCcalendarDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 374px;
`;

export default Calendar;
