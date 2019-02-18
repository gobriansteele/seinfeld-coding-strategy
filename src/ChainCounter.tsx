import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ChainCounter = () => {
  const streakCount = 27;
  return (
    <StreakParagraph>
      You've written code <StreakCount>{streakCount}</StreakCount> days in a row
    </StreakParagraph>
  );
};

const StreakCount = styled.span`
  font-size: 1.75rem;
`;

const StreakParagraph = styled.p`
  color: #fff;
`;

export default ChainCounter;
