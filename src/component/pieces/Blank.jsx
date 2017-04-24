import React, {Component, PropTypes} from 'react'

class Blank extends Component {
  static propTypes = {}
  static defaultProps = {}

  handleClick = () => {
    const {x, y} = this.props
    this.props.handleBoardClick(x, y)
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}/>
    );
  }
}

export default Blank