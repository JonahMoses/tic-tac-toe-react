import React, {Component} from 'react'
import Board from './Board'

class Game extends Component {
  static propTypes = {}
  static defaultProps = {}

  static PLAYER_1 = {'piece': 'x'}
  static PLAYER_2 = {'piece': 'o'}

  constructor(props, context) {
    super(props, context);
    this.state = {
      turns: 0,
      board: Game.createBoard(),
      currentPlayer: Game.PLAYER_1,
    }
  }

  static createBoard() {
    const board = []
    board[0] = new Array(3).fill(-1)
    board[1] = new Array(3).fill(-1)
    board[2] = new Array(3).fill(-1)
    return board
  }

  computeTurn(turn) {
    return (turn % 2 === 0) ? Game.PLAYER_1 : Game.PLAYER_2;
  }

  handleClick() {
    this.state.turns++
    this.setState({
      turns: this.state.turns,
      currentPlayer: this.computeTurn(this.state.turns),
    })
  }

  checkStatus() {}

  gameWon() {}

  gameDraw() {}

  gameReset() {
    this.setState({
      board: Game.createBoard(),
      currentPlayer: Game.PLAYER_1,
    })
  }

  render() {
    const boardProps = {
      size: this.state.board,
      player: this.state.currentPlayer,
      updateGame: this.handleClick.bind(this)
    }

    return (
      <Board {...boardProps}/>
    );
  }
}

export default Game