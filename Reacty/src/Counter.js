import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Contagem: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
};

export default counter;
