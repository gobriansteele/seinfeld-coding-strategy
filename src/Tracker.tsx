import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';

const Tracker: React.FunctionComponent = () => {
  return (
    <div>
      <p>Your last 28 days</p>
      <Calendar />
    </div>
  );
};

export default Tracker;
