import React from 'react';
import styled from 'styled-components';

interface IProps {
  streak: number;
}

const Streak: React.FunctionComponent<IProps> = ({ streak }) => {
  return (
    <SCStreakDiv>
      <h4>You've written code {streak} days in a row</h4>
    </SCStreakDiv>
  );
};

const SCStreakDiv = styled.div`
  text-align: center;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 0 10px;
  h4 {
    font-size: 1.75rem;
    font-weight: 800;
    font-family: sans-serif;
    color: rgba(119, 98, 140, 1);
  }
`;

export default Streak;
