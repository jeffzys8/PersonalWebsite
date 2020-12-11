import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
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

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |



\`sdfsdf\`
`

class Game extends React.Component {
  render() {

    return (
      // <div className="game">
      //   <div className="game-board">
      //     <Board />
      //   </div>
      //   <div className="game-info">
      //     <div>{/* status */}</div>
      //     <ol>{/* TODO */}</ol>
      //   </div>
      //   <ReactMarkdown plugins={[gfm]} children={markdown} />
      // </div>
      <div>
        <span>这是一段没有markdown的文字</span>
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </div>
    );
  }
}

// ========================================


ReactDOM.render(
  <Game />,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
