import React, {Component, PropTypes} from 'react'
import {Ex, Oe, Blank} from './pieces'

class Grid extends Component {
  static propTypes = {
    gridLayout: PropTypes.array,
    handleBoardChange: PropTypes.func
  }

  static defaultProps = {
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let determinePiece = (id, index) => {
      let props = {
        index: index,
        handleBoardChange: this.props.handleBoardChange
      }
      
      if (id === 0) {
        return <Blank {...props} />
      }
      if (id === 1) {
        return <Ex />
      }
      if (id === 2) {
        return <Oe />
      }
    }

    return (
      <div>
        <ul id="game">
          {
            this.props.gridLayout.map(function(pieceId, index) {
              { return determinePiece(pieceId, index) }
            })
          }
        </ul>
      </div>
    );
  }
}

export default Grid
