import React, {Component, PropTypes} from 'react'
import {Ex, Oe, Blank} from './pieces'

class Board extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props, context) {
    super(props, context);

    this.state = {
      board: props.size,
    }
  }

  handlePieceClick(x, y) {
    const boardCache = this.state.board
    boardCache[x][y] = this.props.player.piece

    this.props.updateGame()
    this.setState({
      board: boardCache
    })
  }

  render() {
    const {board} = this.state

    return (
      <div>
        <ul id="game">
          {board.map((row, x) => {
            return row.map((box, y) => {

              const pieceProps = {
                handleBoardClick: this.handlePieceClick.bind(this),
                key: x + y,
                x,
                y,
              }

              if (box === -1) {
                return <Blank {...pieceProps}/>
              }

              if (box === 'o') {
                return <Oe {...pieceProps}/>
              }

              if (box === 'x') {
                return <Ex {...pieceProps}/>
              }

              return <Blank {...pieceProps}/>

            })
          })}

        </ul>
      </div>
    );
  }
}

export default Board