// import { hot } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';

function Pins(props) {
  function handleSelect(count) {
    props.handleChoice(count)
  }

  return (
    <div>
      {props.upright === 0 && <h1>Game Over!</h1>}
      <table>
        <tbody>
          {props.upright > 0 && <FirstRow upright={props.upright} handleClick={handleSelect} />}
        </tbody>
        <tbody>
          {props.upright > 1 && <SecondRow upright={props.upright} handleClick={handleSelect} />}
        </tbody>
        <tbody>
          {props.upright > 3 && <ThirdRow upright={props.upright} handleClick={handleSelect} />}
        </tbody>
        <tbody>
          {props.upright > 5 && <FourthRow upright={props.upright} handleClick={handleSelect} />}
        </tbody>
      </table>
    </div>
  );
}

function FirstRow(props) {
  return(
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => props.handleClick(1)}>One</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

function SecondRow(props) {
  return(
    <tr>
      <td></td>
      <td></td>
      <td onClick={() => props.handleClick(2)}>Two</td>
      <td></td>
      {props.upright > 2 ? <td onClick={() => props.handleClick(3)}>Three</td> : <td></td>}
      <td></td>
      <td></td>
    </tr>
  )
}

function ThirdRow(props) {
  return(
    <tr>
      <td></td>
      <td onClick={() => props.handleClick(4)}>Four</td>
      <td></td>
      {props.upright > 4 ? <td onClick={() => props.handleClick(5)}>Five</td> : <td></td>}
      <td></td>
      {props.upright > 5 ? <td onClick={() => props.handleClick(6)}>Six</td> : <td></td>}
      <td></td>
    </tr>
  )
}

function FourthRow(props) {
  return(
    <tr>
      <td onClick={() => props.handleClick(7)}>Seven</td>
      <td></td>
      {props.upright > 7 ? <td onClick={() => props.handleClick(8)}>Eight</td> : <td></td>}
      <td></td>
      {props.upright > 8 ? <td onClick={() => props.handleClick(9)}>Nine</td> : <td></td>}
      <td></td>
      {props.upright > 9 ? <td onClick={() => props.handleClick(10)}>Ten</td> : <td></td>}
    </tr>
  )
}

export default Pins;