export function postNonogram(newNonData) {
  return (dispatch) => {
    dispatch({ type: 'START_NON_POST' });

    return fetch('/nonograms', {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(newNonData)})
    .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
          error => dispatch({type : "REQUEST_FAILED", error : error})
          );
  };
}

export function switchCell(coords) {
  return (dispatch)=> dispatch({type: 'NEW_SWITCH_CELL', coords})
}
