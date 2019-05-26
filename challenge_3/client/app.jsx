// import { hot } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';
import Pins from './Pins'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: 10
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(count) {
    this.setState({
      pins: count
    })
  }

  render() {
    return (
      <Pins handleChoice={this.handleInput} upright={this.state.pins}/>
    );
  }
}

export default App;