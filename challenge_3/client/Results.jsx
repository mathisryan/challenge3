import React from 'react';
import ReactDOM from 'react-dom';

function Results(props) {
  console.log(props.history);
  var rollOne = props.history.map((frame) => {
    <td>{frame[0]}</td>
  })
  var rollTwo = props.history.map((frame) => {
    <td>{frame[1]}</td>
  })
  return (
    <div>
      <h2>Final Score</h2>
      <table>
        <thead>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {rollOne}
            <td rowSpan='2'>{props.final}</td>
          </tr>
          <tr>
            {rollTwo}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Results;