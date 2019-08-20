const defaultGrid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

export default function manageNewNon(state = {
  grid: defaultGrid, isFetching: false,
}, action) {
  switch (action.type) {

    case 'RESIZE_GRID':

      let grid=[]
      let row=[]

      for (let i = 0; i < action.yLength; i++){
        row =[];
        for (let j = 0; j < action.xLength; j++){
          if (state.grid[i]){row[j]= state.grid[i][j] || 0}
          else {row[j]= 0}
        }
        grid[i]=row
      }

      return {
        ...state,
        grid: grid
      }

    case 'NEW_SWITCH_CELL':

      const coords = action.coords.split(',')
      const x = parseInt(coords[0])
      const y = parseInt(coords[1])
      let clickedGrid = [...state.grid]

      clickedGrid[y][x]=(clickedGrid[y][x]===0 ? 1 : 0)

      return {
        ...state,
        grid: clickedGrid
      }

    case 'START_NON_POST':

      return {...state, isFetching: true}

    case 'REQUEST_SUCCEEDED':

      return {...state, isFetching: false, grid: defaultGrid}

    case 'REQUEST_FAILED':

      return {...state, isFetching: false}


    default:
      return state;

  }
};
