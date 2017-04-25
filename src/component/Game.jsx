import React, {Component, PropTypes} from 'react'
import Board from './Board'

class Game extends Component {
  static propTypes = {
    player: PropTypes.number,
    turnCount: PropTypes.number,
  }
  
  static defaultProps = {
    player: 1,
    turnCount: 0
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const childProps = {
      player: this.props.player,
      turnCount: this.props.turnCount
    }

    return (
      <div>
        <Board {...childProps} />
      </div>
    );
  }
}

export default Game