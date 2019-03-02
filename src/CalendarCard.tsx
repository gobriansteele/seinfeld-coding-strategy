import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface IProps {
  cardType: 'large' | 'small';
  wroteCode: boolean;
}

const CardContainer: React.FunctionComponent<IProps> = props => {
  const { cardType, wroteCode } = props;
  const day = 'Saturday';
  const month = 'March';
  const date = '2';
  const CalendarCardContainerDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(113, 160, 165, 1);
    border-radius: 4px;
    background: transparent;
    height: ${props.cardType === 'large' ? '285px' : '120px'};
    width: ${props.cardType === 'large' ? '100%' : '125px'};
    ${props.cardType === 'large' ? 'max-width: 300px' : ''}
  `;

  const CalendarCardHeaderDiv = styled.div`
    width: 100%;
    height: ${cardType === 'large' ? '55px' : '25px'};
    background: rgba(113, 160, 165, 1);
    h4 {
      font-size: 1.3125rem;
      color: rgba(238, 238, 238, 1);
      font-family: sans-serif;
      line-height: ${cardType === 'large' ? '55px' : '25px'};
    }
  `;

  const CalendarCardBodyDiv = styled.div`
    height: calc(100% - ${cardType === 'large' ? '55px' : '25px'});
    padding: 0 10px;
    h4 {
      font-size: 100px;
      font-family: sans-serif;
      font-weight: 800;
      color: rgba(113, 160, 165, 1);
      line-height: 100%;
      margin: 10px 0;
    }
  `;

  return (
    <CalendarCardContainerDiv>
      <CalendarCardHeaderDiv>
        <h4>{`${day}, ${month}`}</h4>
      </CalendarCardHeaderDiv>
      <CalendarCardBodyDiv>
        <div className="calendarCardDate">
          <h4>{date}</h4>
        </div>
        <div className="calendarCardButtons">
          <Button buttonType="primary">I wrote code today</Button>
          <Button buttonType="negative">I didn't write any code :(</Button>
        </div>
      </CalendarCardBodyDiv>
    </CalendarCardContainerDiv>
  );
};

export default CardContainer;
