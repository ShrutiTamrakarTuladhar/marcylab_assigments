import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Starter code given by templet

// Square component creates/renders a button when called 
class Square extends React.Component {
  render() {
    return (
      // adding event listen to buttons to know when clicked
      <button className="square" onClick={function() {alert('click')}}>
      {/* using props to pass in data and make the componenets dynamic  */}
        {this.props.value}
      </button>
    );
  }
}

// Board renders 9 squares 
class Board extends React.Component {

  // why is the i needed? doest not do anything yet
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game renders the board and placeholder values to mod later
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          {/* unsure why ordered list is being used */}
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
