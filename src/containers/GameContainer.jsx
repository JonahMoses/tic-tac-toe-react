import React, {Component} from 'react'
import determineWinner from '../utils/GameWinner'
import Board from '../components/Board'

const newBoardLayout = () => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

class GameContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      player: 1,
      gridLayout: newBoardLayout()
    }
  }

  newGame = () => {
    this.setState({
      player: 1,
      gridLayout: newBoardLayout(),
      winner: null
    })
  }

  handlePlayerChange = (currentPlayer) => {
    let nextPlayer
    if (currentPlayer === 1){
      nextPlayer = 2
    } else {
      nextPlayer = 1
    }
    return nextPlayer
  }

  handleBoardChange = (index) => {
    let gridLayoutIndex = [...this.state.gridLayout]

    if (!this.state.winner) {
      gridLayoutIndex[index] = this.state.player
    }

    let stateChange = {
      gridLayout: gridLayoutIndex
    }

    if (determineWinner(gridLayoutIndex, this.state.player)){
      stateChange.winner = this.state.player
    } else {
      stateChange.player = this.handlePlayerChange(this.state.player)
    }

    this.setState( stateChange )
  }

  render() {

    const boardProps = {
      newGame: this.newGame,
      handleBoardChange: this.handleBoardChange,
      gridLayout: this.state.gridLayout,
      player: this.state.player,
      winner: this.state.winner
    }

    return (
      <div>
        <Board {...boardProps} />
      </div>
    );
  }
}

export default GameContainer
