const defaultGrid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
const defaultNonograms=[{id:0, height: 5, width: 5, solution: '0000000000000000000000000'}]

export default function manageNon(state = {
  grid: defaultGrid, gridSolution: defaultGrid, isFetching: false, nonograms: defaultNonograms, rowClues: [], colClues: []
}, action) {
  switch (action.type) {

    case 'SWITCH_CELL':

      const  coords = action.coords.split(',')
      const  x = parseInt(coords[0])
      const  y = parseInt(coords[1])
      let  clickedGrid = [...state.grid]

      clickedGrid[y][x]=(clickedGrid[y][x]===0 ? 1 : 0)

      return {
        ...state,
        grid: clickedGrid
      }

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
