const defaultGrid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

export default function manageNon(state = {
  grid: defaultGrid, gridSolution: defaultGrid, isFetching: false
}, action) {
  switch (action.type) {

    case 'SWITCH_CELL<-------fix this':

      const coords = action.coords.split(',')
      const x = parseInt(coords[0])
      const y = parseInt(coords[1])
      let clickedGrid = [...state.grid]

      clickedGrid[y][x]=(clickedGrid[y][x]===0 ? 1 : 0)

      return {
        ...state,
        grid: clickedGrid
      }

    case 'START_NON_REQUEST':

      return {...state, isFetching: true}

    case 'ADD_NONOGRAMS':

      return {...state, isFetching: false, nonograms: action.nonograms}

    default:
      return state;

  }
};
