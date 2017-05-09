const horizontalWin = (gridLayout, player) => {
  for ( let i = 0; i < 3; i++) {
    let j = i*3
    if (gridLayout[j] === player) {
      if (gridLayout[j] === gridLayout[j+1] && gridLayout[j+1] === gridLayout[j+2]) {
       return true
      }
    }
  }
}

const verticalWin = (gridLayout, player) => {
  for ( let i = 0; i < 3; i++) {
    if (gridLayout[i] === player) {
      if (gridLayout[i] === gridLayout[i+3] && gridLayout[i+3] === gridLayout[i+6]) {
       return true
      }
    }
  }
}

const diagonalWin = (gridLayout, player) => {
  if (gridLayout[0] === player) {
    if (gridLayout[0] === gridLayout[4] && gridLayout[4] === gridLayout[8]) {
      return true
    }
  }

  if (gridLayout[2] === player) {
    if (gridLayout[2] === gridLayout[4] && gridLayout[4] === gridLayout[6]) {
      return true
    }
  }
}

const determineWinner = (gridLayout, player) => {
  return horizontalWin(gridLayout, player) || verticalWin(gridLayout, player) || diagonalWin(gridLayout, player)
}


export default determineWinner
