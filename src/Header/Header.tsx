import React from 'react';
import styled from 'styled-components';
import HeaderIcon from './HeaderIcon';

interface Props {
  username?: string;
}

const Header: React.FunctionComponent<Props> = ({ username }) => {
  const alphaCharacter = username
    ? username.substr(0, 1).toUpperCase()
    : undefined;
  return (
    <SCHeaderDiv>
      <HeaderIcon alphaCharacter={alphaCharacter} />
    </SCHeaderDiv>
  );
};

const SCHeaderDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: rgba(119, 98, 140, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
