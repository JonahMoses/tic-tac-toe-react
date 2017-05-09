import React, {Component, PropTypes} from 'react'
import determineWinner from '../utils/gameWinner'
import GridContainer from '../containers/GridContainer'

const newBoardLayout = () => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

class Board extends Component {
  static propTypes = {
    turnCount: PropTypes.number,
    handlePlayerChange: PropTypes.func
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      player: 1,
      gridLayout: newBoardLayout()
    }
    this.newGame = this.newGame.bind(this)
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

  playerText = () => {
    if (this.state.winner) {
      return <div id="winner">{`Player ${this.state.player} wins the game!`}</div>
    } else {
      return <div id="player">{`Player ${this.state.player} turn!`}</div>
    }
  }

  render() {
    let gridLayout = {
      player: this.props.player,
      gridLayout: this.state.gridLayout,
      handleBoardChange: this.handleBoardChange
    }

    return (
      <div>
        <button id='new-game' onClick={this.newGame}>
          Start New Game
        </button>

        <div id="player">
          { this.playerText() }
        </div>

        <GridContainer { ...gridLayout } />

      </div>
    )
  }
}

export default Board
