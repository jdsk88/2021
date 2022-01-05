import {
  CRYPTO_ADD,
  CRYPTO_ALL,
  CRYPTO_CODES,
  CRYPTO_WIDGETDATA_SET,
  CRYPTO_WIDGETDATA,
  CRYPTO_CODES_GET,
  CRYPTO_LINECHART_SET,
  CRYPTO_LINECHART_GET,
  CRYPTO_TABLE_GET,
  CRYPTO_TABLE_SET,
  CRYPTO_ITEM_SET,
  CRYPTO_ITEM_GET,
  CRYPTO_ITEM_CLEAR,
} from "../actions.js";

export const initialState = {
  data: [],
  symbols: [],
  widgets: [],
  lineChart: [],
  table: [],
  item: [],
};

const cryptoReducer = (state = initialState, action) => {
  let rows = [];
  console.log(state.item, action ? action : "NO ACTION YET");
  switch (action.type) {
    case CRYPTO_ADD:
      return { ...state, data: [action.payload] };
    case CRYPTO_ALL:
      return { ...state, data: [...state.data] };
    case CRYPTO_CODES:
      return { ...state, symbols: [action.payload] };
    case CRYPTO_CODES_GET:
      return { ...state, symbols: [...state.symbols] };
    case CRYPTO_WIDGETDATA_SET:
      return { ...state, widgets: [action.payload] };
    case CRYPTO_WIDGETDATA:
      return { ...state, data: [...state.widgets] };
    case CRYPTO_LINECHART_SET:
      return { ...state, lineChart: [action.payload] };
    case CRYPTO_LINECHART_GET:
      return { ...state, lineChart: [...state.lineChart] };
    case CRYPTO_TABLE_SET:
      return { ...state, table: [action.payload] };
    case CRYPTO_TABLE_GET:
      return { ...state, table: [...state.table] };
    case CRYPTO_ITEM_SET:
      if (state.item.length > 1) {
        state.item = [];
      }
      return { ...state, item: [action.payload] };
    case CRYPTO_ITEM_GET:
      return { ...state, item: [...state.item] };
    case CRYPTO_ITEM_CLEAR:
      return { ...state, item: [] };
    default:
      return state;
  }
};

export default cryptoReducer;
