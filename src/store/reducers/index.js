import { combineReducers } from "redux";

import configurationReducer from "./configurationReducer.js";
import pricingReducer from "./pricingReducer.js";
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log(
    `%c
_______________________________________________________
█                                                     █
█   ██████ ████████ ██████ ██████ ███████       =█=   █
█     ██   ██         ██   ██     ██    ██     =███=  █
█     ██   ████████   ██   ████   ███████     =█ █ █= █
█     ██         ██   ██   ██     ██    ██     =███=  █
█   ██████ ████████   ██   ██████ ██    ██      =█=   █  
█_____________________________________________________█
 
 iSter interactive studio inc. ©️          www.ister.pl
`,
    "font-family:monospace;color:#1976d2;font-size:12px;color:lightgreen"
  );
}
const reducer = combineReducers({
  configuration: configurationReducer,
  pricing: pricingReducer,
});

export default reducer;
