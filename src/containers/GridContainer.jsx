import React, { Component, PropTypes } from 'react'
import Grid from '../component/Grid'


export default class EntityDetailContainer extends Component {
  static propTypes = {
    gridLayout: PropTypes.array,
    handleBoardChange: PropTypes.func
  }

  render () {
    let gridLayout = {
      gridLayout: this.props.gridLayout,
      handleBoardChange: this.props.handleBoardChange
    }

    return (
      <div>
        <Grid {...gridLayout} />
      </div>
    )
  }
}
