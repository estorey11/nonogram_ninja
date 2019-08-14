export default function manageNewNon(state = {
  grid: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
}, action) {
  switch (action.type) {

    case 'RESIZE_GRID':

      let grid=[]
      let row=[]

      for (var i = 0; i < action.vert; i++){
        row =[];
        for (var j = 0; j < action.hor; j++){
          if (state.grid[i]){row[j]= state.grid[i][j] || 0}
          else {row[j]= 0}
        }
        grid[i]=row
      }

      return {
        ...state,
        grid: grid
      }



    default:
      return state;

  }
};
