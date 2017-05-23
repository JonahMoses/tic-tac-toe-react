import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Blank extends Component {
  static propTypes = {
    index: PropTypes.number,
    handleBoardChange: PropTypes.func
  }

  handleClick = () => {
    this.props.handleBoardChange(this.props.index)
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}/>
    );
  }
}

export default Blank
