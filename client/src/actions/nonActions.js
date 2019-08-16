export function fetchNonograms() {
  return (dispatch) => {
    dispatch({ type: 'START_NON_REQUEST' });
    return fetch('http://http://localhost:3000/nonograms/1')
      .then(response => response.json())
      .then(nonogram => dispatch({ type: 'ADD_NONOGRAMS', nonograms }));
  };
}
