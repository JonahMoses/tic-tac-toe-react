// Accept a gridLayout
// determine player 1 or player 2 winner
//

const determineWinner = (gridLayout, player) => {
  return horizontalWin(gridLayout, player)
}

// function to check if horizontally won
const horizontalWin = (gridLayout, player) => {
  if (gridLayout[0] === player) {
    if (gridLayout[0] === gridLayout[1] && gridLayout[1] === gridLayout[2]) {
      return true 
    }
  }
}

export default determineWinner

// function to check if vertically won

// function to check if diagonially won
