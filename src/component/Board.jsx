import React, {Component, PropTypes} from 'react'
import determineWinner from '../utils/gameWinner'
import GridContainer from '../containers/GridContainer'

class Board extends Component {
  static propTypes = {
    turnCount: PropTypes.number,
    handlePlayerChange: PropTypes.func
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      player: 1,
      gridLayout: [0, 0, 0, 1, 1, 1, 2, 2, 2]
    }
    this.newGame = this.newGame.bind(this)
  }

  newGame = () => {
    this.setState({
      player: 1,
      gridLayout: [0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    let gridLayoutIndex = this.state.gridLayout
    gridLayoutIndex[index] = this.state.player 
    if (determineWinner(gridLayoutIndex, this.state.player)){
      alert('WINNER')
    }
    this.setState({
      gridLayout: gridLayoutIndex,
      player: this.handlePlayerChange(this.state.player)
    })
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
          Player { this.state.player } turn
        </div>
        <GridContainer { ...gridLayout } />
      </div>
    )
  }
}

export default Board
