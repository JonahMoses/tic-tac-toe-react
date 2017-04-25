import React, {Component, PropTypes} from 'react'

class Blank extends Component {
  static propTypes = {
    index: PropTypes.number
  }

  static defaultProps = {}

  constructor(props, context) {
    super(props, context);
  }

  handleClick = () => {
    console.log('Blank piece clicked with index of:')
    console.log(this.props.index)
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}/>
    );
  }
}

export default Blank
