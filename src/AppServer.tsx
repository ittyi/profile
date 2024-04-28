import React from 'react';
import "./AppServer.css";

const AppServer = () => {
  const startEngineer = 2021

  const now: Date = new Date();
  const engineeringHistory: number = now.getFullYear() - startEngineer

  return (
    <div>
      <main>
        <h1 >
          ittyi.jp
        </h1>
        <ul>
          <li>Backend Engineer: {engineeringHistory} year</li>
          <li>former athletic instructor/personal trainer: 4 year</li>
          <li><a href="https://twitter.com/42_loves">X(twitter)</a></li>
        </ul>
      </main>
    </div>
  );
};

export default AppServer;