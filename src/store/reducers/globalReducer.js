import {
  GLOBAL_KEYLOGGER,
  GLOBAL_MOUSE_CLICK_COUNTER,
  GLOBAL_CLICKER_STATE,
} from "../actions.js";
export const initialState = { clicks: [], keylogs: [] };
const globalReducer = (state = initialState, action) => {
  console.log(state, action ? action : "NO ACTION YET");
  switch (action.type) {
    case GLOBAL_MOUSE_CLICK_COUNTER:
      return { ...state, clicks: [...state.clicks, action.payload] };
    case GLOBAL_KEYLOGGER:
      return { ...state, keylogs: [...state.keylogs, action.payload] };
    case GLOBAL_CLICKER_STATE:
      return { ...state, clicks: [...state.clicks] };
    default:
      return state;
  }
};

export default globalReducer;
