import React, { useState, useEffect } from 'react';

const AppServer = () => {
  const [startEngineer, setStartEngineer] = useState(2021)

  useEffect(() => {
    const now: Date = new Date();
    const engineeringHistory: number = now.getFullYear() - startEngineer
    setStartEngineer(engineeringHistory)
  }, []);

  return (
    <div>
      <main>
        <h1>
          ittyi.jp
        </h1>
        <ul>
          <li>Backend Engineer: {startEngineer} year</li>
          <li>former athletic instructor/personal trainer: 4 year</li>
          <li><a href="https://twitter.com/42_loves">X(twitter)</a></li>
        </ul>
      </main>
    </div>
  );
};

export default AppServer;