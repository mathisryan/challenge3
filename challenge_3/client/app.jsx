// import { hot } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';
import Pins from './Pins'
import Results from './Results'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: 10,
      score: 0,
      frame: 1,
      roll: 1,
      record: [],
      finished: false
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(count) {
    // Handling a strike
    if (this.state.roll === 1 && count === 10) {
      window.alert('STRIKE!!!');
      // Handling a strike before the last frame
      if (this.state.frame < 10) {
        var newFrame = this.state.frame + 1;
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord.push(['X', '']);
        this.setState({
          pins: 10,
          frame: newFrame,
          score: newScore,
          roll: 1,
          record: newRecord
        })
      // Handling a strike in the last frame
      } else if (this.state.frame === 10) {
        var newFrame = 11;
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord.push(['X', '']);
        this.setState({
          pins: 10,
          frame: newFrame,
          score: newScore,
          roll: 1,
          record: newRecord
        })
      // Handling a strike in the 11th frame after a strike in the 10th frame
      } else if (this.state.frame === 11 && this.state.record[this.state.frame - 2][0] === 'X') {
        var newFrame = 12;
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord.push(['X', '']);
        this.setState({
          pins: 10,
          frame: newFrame,
          score: newScore,
          roll: 1,
          record: newRecord
        })
      // Handling a strike in the 11th frame after a spare in the 10th frame
      }  else if (this.state.frame === 11 && this.state.record[this.state.frame - 2][1] === '/') {
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord.push(['X', '']);
        this.setState({
          score: newScore,
          record: newRecord,
          finished: true
        })
      // Handling a strike in the 12th frame
      } else if (this.state.frame === 12) {
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord.push(['X', '']);
        this.setState({
          score: newScore,
          record: newRecord,
          finished: true
        })
      }
    };
    // Handling a spare
    if (this.state.roll === 2 && count === this.state.pins) {
      window.alert('SPARE!!!');
      // Handling a spare before the last frame
      if (this.state.frame < 10) {
        var newFrame = this.state.frame + 1;
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord[this.state.frame - 1][1] = '/';
        this.setState({
          pins: 10,
          frame: newFrame,
          score: newScore,
          roll: 1,
          record: newRecord
        })
      // Handling a spare in the last frame
      } else if (this.state.frame === 10) {
        var newFrame = 11;
        var newScore = this.state.score + count;
        var newRecord = this.state.record;
        newRecord[this.state.frame - 1][1] = '/';
        this.setState({
          pins: 10,
          frame: newFrame,
          score: newScore,
          roll: 1,
          record: newRecord
        })
      }
    };
    // Handling the first roll after a strike
    if (this.state.frame > 1 && this.state.frame <= 10 &&
      this.state.record[this.state.frame - 2][0] === 'X' &&
      count !== this.state.pins && this.state.roll === 1) {
        var newScore = this.state.score + count + count;
        var newRecord = this.state.record;
        newRecord.push([count, '']);
        this.setState({
          score: newScore,
          record: newRecord,
          roll: 2
        })
    // Handling the first roll after a spare
    } else if (this.state.frame > 1 && this.state.frame <= 10 &&
      this.state.record[this.state.frame - 2][1] === '/' &&
      this.state.roll === 1 && count < 10) {
        var newScore = this.state.score + count + count;
        var newRecord = this.state.record;
        newRecord.push([count, '']);
        this.setState({
          score: newScore,
          record: newRecord,
          roll: 2
        })
    // Handling the first roll
    } else if (this.state.frame <= 10 && this.state.roll === 1 && this.state.pins > count) {
      var current = this.state.pins - count;
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord.push([count, '']);
      this.setState({
        score: newScore,
        roll: 2,
        record: newRecord,
        pins: current
      })
    };
    // Handling the second roll after a strike
    if (this.state.frame > 1 && this.state.frame < 10 &&
      this.state.record[this.state.frame - 2][0] === 'X' &&
      count !== this.state.pins && this.state.roll === 2) {
        var newScore = this.state.score + count + count;
        var newFrame = this.state.frame + 1;
        var newRecord = this.state.record;
        newRecord[this.state.frame - 1][1] = count;
        this.setState({
          frame: newFrame,
          score: newScore,
          roll: 1,
          record: newRecord,
          pins: 10
        })
    // Handling the second roll before the last frame
    } else if (this.state.frame < 10 && this.state.roll === 2 && this.state.pins > count) {
      var newFrame = this.state.frame + 1;
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord[this.state.frame - 1][1] = count;
      this.setState({
        frame: newFrame,
        score: newScore,
        roll: 1,
        record: newRecord,
        pins: 10
      })
    // Handling the second roll of the last frame
    } else if (this.state.frame === 10 && this.state.roll === 2 && this.state.pins > count) {
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord[this.state.frame - 1][1] = count;
      this.setState({
        score: newScore,
        roll: 1,
        record: newRecord,
        finished: true
      })
    }
    // Handling the first roll of the eleventh frame after a strike
    if (this.state.frame === 11 && this.state.record[this.state.frame - 2][0] === 'X' &&
      count < 10 && this.state.roll === 1) {
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord.push([count, '']);
      this.setState({
        score: newScore,
        roll: 2,
        record: newRecord
      })
    }
    // Handling the second roll of the eleventh frame after a strike
    if (this.state.frame === 11 && this.state.record[this.state.frame - 2][0] === 'X' &&
      count < 10 && this.state.roll === 2) {
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord[this.state.frame - 2][1] = count;
      this.setState({
        score: newScore,
        record: newRecord,
        finished: true
      })
    }
    // Handling the first roll of the eleventh frame after a spare
    if (this.state.frame === 11 && this.state.record[this.state.frame - 2][1] === '/' &&
      count < 10) {
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord.push([count, '']);
      this.setState({
        score: newScore,
        record: newRecord,
        finished: true
      })
    }
    // Handling a non-strike roll in the twelfth frame
    if (this.state.frame === 12 && count < 10) {
      var newScore = this.state.score + count;
      var newRecord = this.state.record;
      newRecord.push([count, '']);
      this.setState({
        score: newScore,
        record: newRecord,
        finished: true
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Bowling!!!</h1>
        <p>Select the number of pins to knock down:</p>
        {this.state.finished ?
          <Results history={this.state.record} final={this.state.score} /> :
          <Pins handleChoice={this.handleInput} upright={this.state.pins} status={this.state.frame}
            tally={this.state.score}/>}
      </div>
    );
  }
}

export default App;