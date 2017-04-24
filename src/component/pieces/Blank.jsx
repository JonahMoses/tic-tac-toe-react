import React, {Component, PropTypes} from 'react'

class Blank extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
  }

  static defaultProps = {}

  handleClick = () => {
    console.log('piece click')
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}/>
    );
  }
}

export default Blank