import {
  CRYPTO_ADD,
  CRYPTO_ALL,
  CRYPTO_CODES,
  CRYPTO_WIDGETDATA_SET,
  CRYPTO_WIDGETDATA,
} from "../actions.js";

export const initialState = { data: [],symbols:[],widgets:[] };

const cryptoReducer = (state = initialState, action) => {
  console.log(state, action ? action : "NO ACTION YET");
  switch (action.type) {
    case CRYPTO_ADD:
      return { ...state, data: [...state.data, action.payload] };
    case CRYPTO_ALL:
      return { ...state, data: [...state.data] };
    case CRYPTO_CODES:
      return { ...state, data: [...state.data] };
    case CRYPTO_WIDGETDATA_SET:
      return { ...state, widgets: [...state.widgets,action.payload] };
    case CRYPTO_WIDGETDATA:
      return { ...state, widgets: [...state.widgets] };

    default:
      return state;
  }
};

export default cryptoReducer;
