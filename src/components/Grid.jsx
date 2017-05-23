import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Ex, Oe, Blank} from './pieces'

class Grid extends Component {
  static propTypes = {
    gridLayout: PropTypes.array,
    handleBoardChange: PropTypes.func
  }

  render() {
    let determinePiece = (id, index) => {
      let props = {
        index: index,
        handleBoardChange: this.props.handleBoardChange
      }
      if (id === 0) {
        return <Blank key={index} {...props} />
      }
      if (id === 1) {
        return <Ex key={index} />
      }
      if (id === 2) {
        return <Oe key={index} />
      }
    }

    return (
      <div>
        <ul id="game">
          {
            this.props.gridLayout.map(function(pieceId, index) {
              return determinePiece(pieceId, index)
            })
          }
        </ul>
      </div>
    );
  }
}

export default Grid
