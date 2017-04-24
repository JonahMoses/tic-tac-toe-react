import React, {Component, PropTypes} from 'react'
import {Ex, Oe, Blank} from './pieces'

class Board extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div>
        <ul id="game">
          <Oe />
          <Oe />
          <Oe />

          <Blank />
          <Blank />
          <Blank />

          <Ex />
          <Ex />
          <Ex />
        </ul>
      </div>
    );
  }
}

export default Board