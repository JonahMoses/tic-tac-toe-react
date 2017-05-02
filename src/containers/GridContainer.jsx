import React, { Component, PropTypes } from 'react'
import Grid from '../component/Grid'


export default class EntityDetailContainer extends Component {
  static propTypes = {
    gridLayout: PropTypes.array,
    handleBoardChange: PropTypes.func
  }

  constructor (props) {
    super(props)
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

// array of integers to indicate whether it was a blank, x, or o.
// made button to start new game, which sets gridLayout back to all blanks
// created a HOC GridContainer that accepts the current state of the gridLayout
// inside of grid, determine the correct pieces depend on the gridLayout values
// Working On: clicking on a blank piece and changing it within the gridLayout to a 1
// react lifecycle hooks, figuring out which one and where to use.
// next step is to implement playing switching.
