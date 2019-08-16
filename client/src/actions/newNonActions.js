export function postNonograms(newNonData) {
  return (dispatch) => {
    dispatch({ type: 'START_NON_POST' });
    return fetch('/nonograms', {method: 'POST', body: JSON.stringify(newNonData)})
    .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
          error => dispatch({type : "REQUEST_FAILED", error : error})
          );
  };
}
