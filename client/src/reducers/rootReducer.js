import { combineReducers } from "redux";
import manageNewNon from './manageNewNon'
import manageNon from './manageNon'

const rootReducer = combineReducers({
  newNon: manageNewNon,
  Non: manageNon
});

export default rootReducer;
