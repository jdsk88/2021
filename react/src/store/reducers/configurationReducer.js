// project imports
import config from "../../config.js";

import {
  SET_THEME,
  SET_LANGUAGE,
  SET_MENU_STATE,
  MENU_OPEN,
  SET_ROLE,
} from "../actions.js";

export const initialState = {
  isOpen: [],
  opened: false,
  resizer: "",
  theme: config.theme,
  language: config.language,
  role: config.role,
};

const configurationReducer = (state = initialState, action) => {
  let id;
  console.log(state);
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.role,
      };
    case SET_MENU_STATE:
      return {
        ...state,
        opened: action.opened,
      };
    case MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    default:
      return state;
  }
};

export default configurationReducer;
