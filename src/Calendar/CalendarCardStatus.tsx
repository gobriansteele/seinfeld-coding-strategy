import React from 'react';
import styled from 'styled-components';
import DoneCheckmark from '../assets/Done';

interface Props {
  iconSize: 'large' | 'small';
}

const CalendarCardStatus: React.FunctionComponent<Props> = ({ iconSize }) => {
  const EditContainer = styled.div`
    text-align: center;
    p {
      font-family: sans-serif;
      font-size: ${iconSize === 'large' ? '0.75rem' : '.5rem'};
      font-weight: 200;
      color: rgba(113, 160, 165, 1);
    }
  `;

  return (
    <div>
      <DoneCheckmark iconSize={iconSize} />
      <EditContainer>
        <p>(click the icon to edit)</p>
      </EditContainer>
    </div>
  );
};

export default CalendarCardStatus;
