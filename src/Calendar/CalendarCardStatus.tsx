import React from 'react';
import styled from 'styled-components';
import DoneCheckmark from '../assets/Done';

const CalendarCardStatus = () => {
  return (
    <div>
      <DoneCheckmark />
      <EditContainer>
        <p>(click the icon to edit)</p>
      </EditContainer>
    </div>
  );
};

const EditContainer = styled.div`
  text-align: center;
  p {
    font-family: sans-serif;
    font-size: 0.75rem;
    font-weight: 200;
    color: rgba(113, 160, 165, 1);
  }
`;

export default CalendarCardStatus;
