import React, {Component, PropTypes} from 'react'

class Blank extends Component {
  static propTypes = {
    index: PropTypes.number,
    handleBoardChange: PropTypes.func
  }

  static defaultProps = {}

  constructor(props, context) {
    super(props, context);
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
