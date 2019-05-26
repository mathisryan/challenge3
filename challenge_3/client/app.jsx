// import { hot } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';
import Pins from './Pins'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: 10,
      score: 0,
      frame: 1,
      roll: 1,
      record: []
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(count) {
    if (this.state.roll === 1 && count === 10) {
      window.alert('STRIKE!!!');
      newFrame = this.state.frame + 1;
      newScore = this.state.score + count;
      newRecord = this.state.record;
      newRecord.push(['X', '']);
      this.setState({
        pins: 10,
        frame: newFrame,
        score: newScore,
        roll: 1,
        record: newRecord
      })
    };
    if (this.state.roll === 2 && count === this.state.pins) {
      window.alert('SPARE!!!');
      newFrame = this.state.frame + 1;
      newScore = this.state.score + count;
      newRecord = this.state.record;
      newRecord[this.state.frame][1] = '/';
      this.setState({
        pins: 10,
        frame: newFrame,
        score: newScore,
        roll: 1,
        record: newRecord
      })
    };
    if (this.state.frame > 1 && this.state.record[this.state.frame - 1][0] === 'X') {
      newScore = this.state.score + count;
      this.setState({
        score: newScore
      })
    };
    if (this.state.frame > 1 && this.state.record[this.state.frame - 1][1] === '/' &&
      this.state.roll === 1) {
      newScore = this.state.score + count;
      this.setState({
        score: newScore
      })
    };
    if (this.state.frame < 10 && this.state.roll === 2 && this.state.pins > count) {
      newFrame = this.state.frame + 1;
      newScore = this.state.score + count;
      this.setState({
        frame: newFrame,
        score = newScore,
        roll: 1
      })
    }
    }
    var current = this.state.pins - count;
    if (current < 0) {current = 0};
    this.setState({
      pins: current
    })
  }

  render() {
    return (
      <Pins handleChoice={this.handleInput} upright={this.state.pins}/>
    );
  }
}

export default App;