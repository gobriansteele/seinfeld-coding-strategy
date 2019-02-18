import React, { useState, useEffect } from 'react';

interface IProps {
  username: string;
}

const Greeting: React.FunctionComponent<IProps> = ({ username }) => {
  return (
    <div>
      <p>Hi {username}</p>
      <p>Did you code today?</p>
    </div>
  );
};

export default Greeting;
