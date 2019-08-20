import { transpose } from 'mathjs'

export function fetchNonograms() {
  return (dispatch) => {
    dispatch({ type: 'START_NON_REQUEST' });
    return fetch('/nonograms')
      .then(response => response.json())
      .then(nonograms => dispatch({ type: 'ADD_NONOGRAMS', nonograms }));
  };
}

export function rightClickCell(coords){
  return (dispatch)=> dispatch({type: 'RIGHT_CLICK_CELL', coords})
}


function createSolutionGrid(height, width, solution){
  let grid=[]
  let row=[]

  for (let y = 0; y < height; y++){
    row=[]
    for (let x = 0; x < width; x++){
      row[x]=parseInt(solution.charAt(y*width+x))
    }

    grid[y]=row

  }

  return grid
}

function createRowClues(grid){
  let rowClues=grid.map(row=>{

    let clues=[0]
    let chunk=-1
    let chunking=false
    for (let i = 0; i < row.length; i++){
      if (row[i]===1 && chunking===false){
        chunking=true
        chunk++
        clues[chunk]=1
      }
      else if (row[i]===1 && chunking===true) {
        clues[chunk]++
      }
      else if (row[i]===0 && chunking===true) {
        chunking=false
      }
    }
    return clues
  })

  return rowClues
}

export function mouseDownOnCell(coords) {
  return (dispatch)=> dispatch({type: 'MOUSE_DOWN_ON_CELL', coords})
}

export function setSolutionAndCluesFromSpecs(height, width, solution){
  const gridSolution=createSolutionGrid(height, width, solution)
  const rowClues=createRowClues(gridSolution)
  const colClues=createRowClues(transpose(gridSolution))
  const grid=gridSolution.map(row=> row.map( cell=> 0))

  return (dispatch)=> dispatch({type: 'SET_GRID_SOLUTION_AND_CLUES', gridSolution, rowClues, colClues, grid})
}
