import {newGridFromCLick} from './manageNon'

const defaultGrid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

export default function manageNewNon(state = {
  grid: defaultGrid, isFetching: false, isDragging: false
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


    case 'START_NON_POST':

      return {...state, isFetching: true}

    case 'REQUEST_SUCCEEDED':

      return {...state, isFetching: false, grid: defaultGrid}

    case 'REQUEST_FAILED':

      return {...state, isFetching: false}

    case 'NEW_MOUSE_DOWN_ON_CELL':
      return {
        ...state,
        grid: newGridFromCLick(action.coords, [...state.grid]), isDragging: true
      }

    case 'NEW_MOUSE_OVER_CELL':

      if (state.isDragging){
        return {
          ...state,
          grid: newGridFromCLick(action.coords, [...state.grid]), isDragging: true
          }
        }
      return state;

    case "NEW_MOUSE_UP":

      return {...state, isDragging: false}

    case 'NEW_RIGHT_CLICK_CELL':

      return {...state, isDragging: false}

    default:
      return state;

  }
};
