const defaultGrid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
const defaultNonograms=[{id:0, height: 5, width: 5, solution: '0000000000000000000000000'}]

export default function manageNon(state = {
  grid: defaultGrid, gridSolution: defaultGrid, isFetching: false, nonograms: defaultNonograms, rowClues: [], colClues: [], isDragging: false
}, action) {
  switch (action.type) {

    case 'MOUSE_DOWN_ON_CELL':
      return {
        ...state,
        grid: newGridFromCLick(action.coords, [...state.grid]), isDragging: true
      }

    case 'MOUSE_OVER_CELL':

      if (state.isDragging){
        return {
          ...state,
          grid: newGridFromCLick(action.coords, [...state.grid]), isDragging: true
        }
      }
      return state;

    case 'START_NON_REQUEST':

      return {...state, isFetching: true}

    case 'ADD_NONOGRAMS':

      return {...state, isFetching: false, nonograms: action.nonograms}

    case 'SET_GRID_SOLUTION_AND_CLUES':

      return {...state, gridSolution: action.gridSolution, rowClues: action.rowClues, colClues: action.colClues, grid: action.grid}

    case 'RIGHT_CLICK_CELL':

      const rCoords = action.coords.split(',')
      const rX = parseInt(rCoords[0])
      const rY = parseInt(rCoords[1])
      let rClickedGrid = [...state.grid]

      rClickedGrid[rY][rX]=(rClickedGrid[rY][rX]!='X' ? 'X' : 0)

      return {
        ...state,
        grid: rClickedGrid
      }

    default:
      return state;

  }
};

function newGridFromCLick(coords, grid){
  const  parsedCoords = coords.split(',')
  const  x = parseInt(parsedCoords[0])
  const  y = parseInt(parsedCoords[1])
  let  clickedGrid = grid
  clickedGrid[y][x]=(clickedGrid[y][x]===0 ? 1 : 0)

  return clickedGrid
}
