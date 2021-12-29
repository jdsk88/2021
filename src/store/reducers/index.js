import { combineReducers } from "redux";

import configurationReducer from "./configurationReducer.js";
import pricingReducer from "./pricingReducer.js";

const reducer = combineReducers({
  configuration: configurationReducer,
  pricing: pricingReducer,
});

export default reducer;
