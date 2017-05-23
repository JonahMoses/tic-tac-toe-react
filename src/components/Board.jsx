import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Grid from './Grid'

class Board extends Component {
  static propTypes = {
    newGame: PropTypes.func,
    handleBoardChange: PropTypes.func,
    gridLayout: PropTypes.array,
    player: PropTypes.number,
    winner: PropTypes.number
  }

  playerText = () => {
    if (this.props.winner) {
      return <div id="winner">{`Player ${this.props.player} wins the game!`}</div>
    } else {
      return <div id="player">{`Player ${this.props.player} turn!`}</div>
    }
  }

  render() {
    let gridProps = {
      gridLayout: this.props.gridLayout,
      handleBoardChange: this.props.handleBoardChange
    }

    return (
      <div>
        <button id='new-game' onClick={this.props.newGame}>
          Start New Game
        </button>

        <div id="player">
          { this.playerText() }
        </div>

        <Grid { ...gridProps } />

      </div>
    )
  }
}

export default Board
