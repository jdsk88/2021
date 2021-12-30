import {
  CRYPTO_ADD,
  CRYPTO_ALL,
  CRYPTO_CODES,
  CRYPTO_WIDGETDATA_SET,
  CRYPTO_WIDGETDATA,
  CRYPTO_CODES_GET,
} from "../actions.js";

export const initialState = { data: [], symbols: [], widgets: [] };

const cryptoReducer = (state = initialState, action) => {
  console.log(state, action ? action : "NO ACTION YET");
  switch (action.type) {
    case CRYPTO_ADD:
      return { ...state, data: [action.payload] };
    case CRYPTO_ALL:
      return { ...state, data: [...state.data] };
    case CRYPTO_CODES:
      return { ...state, symbols: [...state.symbols, action.payload] };
    case CRYPTO_CODES_GET:
      return { ...state, symbols: [...state.symbols] };
    case CRYPTO_WIDGETDATA_SET:
      return { ...state, widgets: [action.payload] };
    case CRYPTO_WIDGETDATA:
      return { ...state, data: [...state.widgets] };

    default:
      return state;
  }
};

export default cryptoReducer;
