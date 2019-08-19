import { combineReducers } from "redux";
import manageNewNon from './manageNewNon'
import manageNon from './manageNon'

const rootReducer = combineReducers({
  newNon: manageNewNon,
  non: manageNon
});

export default rootReducer;
