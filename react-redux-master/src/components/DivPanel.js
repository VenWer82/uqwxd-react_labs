import React from 'react';
import { useSelector } from 'react-redux';

const DivPanel = () => {
  const count = useSelector((state) => state.count);

  return <div>The counter value is {count}</div>;
};

export default DivPanel;
