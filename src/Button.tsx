import React from 'react';

interface IProps {
  type: 'primary' | 'negative';
}

const Button: React.FunctionComponent<IProps> = ({ type, children }) => {
  return <button className={type}>{children}</button>;
};

export default Button;
