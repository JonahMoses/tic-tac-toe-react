import React, {Component, PropTypes} from 'react'
import GridContainer from '../containers/GridContainer'

class Board extends Component {
  static propTypes = {
    player: PropTypes.number,
    turnCount: PropTypes.number,
  }
  static defaultProps = {
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      player: this.props.player,
      gridLayout: [0, 0, 0, 1, 1, 1, 2, 2, 2]
    }
    this.newGame = this.newGame.bind(this)
  }

  newGame = () => {
    this.setState({
      gridLayout: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
  }

  handleBoardChange = (index, pieceType) => {
    let gridLayoutIndex = this.state.gridLayout
    gridLayoutIndex[index] = pieceType
    this.setState({
      gridLayout: gridLayoutIndex
    })
  }

  render() {
    let gridLayout = {
      gridLayout: this.state.gridLayout
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