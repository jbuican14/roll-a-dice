import React from 'react';
import './Die.css';

const Die = ({ dice1, dice2 }) => {
  console.log(dice1, dice2);
  return (
    <div>
      <span>
        <i className={`Die fas fa-dice-${dice1} fa-5x`}></i>
      </span>
      <span>
        <i className={`Die fas fa-dice-${dice2} fa-5x`}></i>
      </span>
    </div>
  );
};

export default Die;
