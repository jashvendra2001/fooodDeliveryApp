import React from 'react';
import { useParams } from 'react-router-dom';

const Contect = () => {
  
  const {Id}=useParams();
console.log(Id)
  
  return (
    <div>Contact ID:{Id}</div>
  );
};

export default Contect;
