// src/AppServer.js
import React, { useState } from 'react';

const AppServer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello from Server-Side</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default AppServer;