import React from 'react';
import './Die.css';

const Die = ({ dice1, dice2, rolling }) => {
  console.log(dice1, dice2);
  return (
    <div>
      <span>
        <i
          className={`Die fas fa-dice-${dice1} fa-5x ${rolling && 'rolling'}`}
        ></i>
      </span>
      <span>
        <i
          className={`Die fas fa-dice-${dice2} fa-5x ${rolling && 'rolling'}`}
        ></i>
      </span>
    </div>
  );
};

export default Die;
