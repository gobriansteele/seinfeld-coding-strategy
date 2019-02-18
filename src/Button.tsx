import React from 'react';
import styled from 'styled-components';

interface IProps {
  buttonType: 'primary' | 'negative';
}

const Button: React.FunctionComponent<IProps> = ({ buttonType, children }) => {
  const ButtonWrapper = getButtonStyles(buttonType);
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

const getButtonStyles = (buttonType: string) => {
  return styled.button`
    border: 1px solid rgba(51, 153, 255, 1);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    height: 40px;
    background: transparent;
    border-radius: 4px;
    width: 100%;
    max-width: 374px;
    color: ${() => {
      return buttonType === 'primary'
        ? 'rgba(51, 153, 255, 1)'
        : 'rgba(130, 130, 130, 1)';
    }};
    &:hover {
      color: #fff;
      background: ${() => {
        if (buttonType === 'primary') {
          return `rgba(51, 153, 255, 1);`;
        } else {
          return `rgba(130, 130, 130, 1);`;
        }
      }};
    }
  `;
};

export default Button;
