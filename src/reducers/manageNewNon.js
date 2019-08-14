export default function manageNewNon(state = {
  grid: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
}, action) {
  switch (action.type) {

    case 'RESIZE_GRID':

      let grid=[]
      let row=[]

      for (var i = 0; i < action.yLength; i++){
        row =[];
        for (var j = 0; j < action.xLength; j++){
          if (state.grid[i]){row[j]= state.grid[i][j] || 0}
          else {row[j]= 0}
        }
        grid[i]=row
      }

    case 'SWITCH_CELL':

      const coords = action.coords.split(',')
      const x = parseInt(coords[0])
      const y = parseInt(coords[1])
      const grid = state.grid
      grid[y][x]=(grid[y][x]===0 ? 1 : 0)

      return {
        ...state,
        grid: grid
      }



    default:
      return state;

  }
};
