import { combineReducers } from "redux";

import configurationReducer from "./configurationReducer.js";

const reducer = combineReducers({
  configuration: configurationReducer,
});

export default reducer;
