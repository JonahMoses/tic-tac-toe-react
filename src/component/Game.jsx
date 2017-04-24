import React, {Component} from 'react'
import Board from './Board'

class Game extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Board />
    );
  }
}

export default Game