import React from 'react';
import styled from 'styled-components';

interface Props {
  alphaCharacter?: string;
}
const HeaderIcon: React.FunctionComponent<Props> = ({ alphaCharacter }) => {
  return (
    <SCHeaderIconDiv>
      {alphaCharacter ? <p>{alphaCharacter}</p> : ''}
    </SCHeaderIconDiv>
  );
};

const SCHeaderIconDiv = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  background: #fff;
  text-align: center;
  p {
    font-size: 1.75rem;
    line-height: 36px;
    font-weight: 800;
    font-family: sans-serif;
    color: rgba(119, 98, 140, 1);
  }
`;

export default HeaderIcon;
