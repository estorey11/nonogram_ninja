export function fetchNonograms() {
  return (dispatch) => {
    dispatch({ type: 'START_NON_REQUEST' });
    return fetch('/nonograms')
      .then(response => response.json())
      .then(nonograms => dispatch({ type: 'ADD_NONOGRAMS', nonograms }));
  };
}

export function setSolutionAndCluesfromSpecs(height, width, solution){

  let grid=[]
  let row=[]

  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      row[x]=parseInt(solution.charAt(y+x))
    }
    grid[y]=row
  }



}
