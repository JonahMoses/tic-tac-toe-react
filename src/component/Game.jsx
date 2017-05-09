import React, {Component, PropTypes} from 'react'
import Board from './Board'

class Game extends Component {
  static propTypes = {
    turnCount: PropTypes.number
  }

  static defaultProps = {
    turnCount: 0
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const childProps = {
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
