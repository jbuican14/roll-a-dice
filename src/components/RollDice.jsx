import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = {
      numDice1: 'one',
      numDice2: 'one',
      isRolling: false,
    };

    this.genDice = this.genDice.bind(this);
  }

  genDice() {
    let rand1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    let rand2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({
      numDice1: rand1,
      numDice2: rand2,
      isRolling: true,
    });

    // wait 1s
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die
            dice1={this.state.numDice1}
            dice2={this.state.numDice2}
            rolling={this.state.isRolling}
          />
        </div>

        <button onClick={this.genDice} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
