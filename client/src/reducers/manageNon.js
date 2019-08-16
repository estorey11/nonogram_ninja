export default function manageNon(state = {
  grid: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
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



    default:
      return state;

  }
};
