import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numDice1: 'one',
      numDice2: 'one',
    };

    this.genDice = this.genDice.bind(this);
    this.diceName = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
    };
  }

  genDice() {
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;

    rand1 = this.diceName[rand1];
    rand2 = this.diceName[rand2];

    this.setState({
      numDice1: rand1,
      numDice2: rand2,
    });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.numDice1} {this.state.numDice2}
        </p>
        <div>
          <Die dice1={this.state.numDice1} dice2={this.state.numDice2} />
        </div>

        <button onClick={this.genDice}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
