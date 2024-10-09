import React from 'react';
import { useNavigate } from 'react-router-dom';

function Mycart() {
    const navigate = useNavigate();

  const someEventHandler = () => {
    navigate('/product'); // Navigate back to the product page
  };

  return (
    <div>
      <h1>Your cart is currently empty</h1>
      <button onClick={someEventHandler}>Back to shopping</button> {/* Directly passing the handler */}
    </div>
  );
}

export default Mycart;  