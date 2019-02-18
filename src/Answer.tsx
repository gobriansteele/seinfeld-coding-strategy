import React, { useState, useEffect } from 'react';
import Button from './Button';

const Answer: React.FunctionComponent = () => {
  return (
    <>
      <Button buttonType="primary">Yep, sure did!</Button>
      <Button buttonType="negative">No :(</Button>
    </>
  );
};

export default Answer;
