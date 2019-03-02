import React from 'react';
import styled from 'styled-components';

interface IProps {
  buttonType: 'primary' | 'negative';
}

const Button: React.FunctionComponent<IProps> = ({ buttonType, children }) => {
  const SCbutton = getButtonStyles(buttonType);
  return <SCbutton>{children}</SCbutton>;
};

const getButtonStyles = (buttonType: string) => {
  return styled.button`
    border: 1px solid rgba(113, 160, 165, 1);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 400;
    height: 40px;
    background: ${buttonType === 'primary'
      ? 'rgba(113, 160, 165, 1)'
      : 'transparent'};
    border-radius: 4px;
    width: 100%;
    max-width: 374px;
    color: ${() => {
      return buttonType === 'primary'
        ? 'rgba(238, 238, 238, 1)'
        : 'rgba(113, 160, 165, 1)';
    }};
    &:hover {
      color: ${() => {
        if (buttonType === 'negative') {
          return `rgba(238, 238, 238, 1)`;
        } else {
          return `rgba(113, 160, 165, 1)`;
        }
      }};
      background: ${() => {
        if (buttonType === 'primary') {
          return `rgba(238, 238, 238, 1)`;
        } else {
          return `rgba(113, 160, 165, 1)`;
        }
      }};
    }
  `;
};

export default Button;
