export function fetchNonograms() {
  return (dispatch) => {
    dispatch({ type: 'START_NON_REQUEST' });
    return fetch('/nonograms')
      .then(response => response.json())
      .then(nonograms => dispatch({ type: 'ADD_NONOGRAMS', nonograms }));
  };
}
