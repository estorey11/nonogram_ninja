export function postNonogram(newNonData) {
  return (dispatch) => {
    dispatch({ type: 'START_NON_POST' });

    return fetch('/nonograms', {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(newNonData)})
    .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
          error => dispatch({type : "REQUEST_FAILED", error : error})
          );
  };
}

export function mouseDownOnCell(coords) {
  return (dispatch)=> dispatch({type: 'NEW_MOUSE_DOWN_ON_CELL', coords})
}

export function mouseOverCell(coords){
  return (dispatch)=> dispatch({type: 'NEW_MOUSE_OVER_CELL', coords})
}

export function mouseUp(){
  return (dispatch)=> dispatch({type: 'NEW_MOUSE_UP',})
}
