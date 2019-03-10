import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const CalendarCardButtons = () => {
  const ButtonContainerDiv = styled.div`
    margin-bottom: 10px;
  `;
  return (
    <div className="calendarCardButtons">
      <ButtonContainerDiv>
        <Button buttonType="primary">I wrote code today</Button>
      </ButtonContainerDiv>
      <Button buttonType="negative">I didn't write any code :(</Button>
    </div>
  );
};

export default CalendarCardButtons;
