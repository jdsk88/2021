import data from "store/data/charts/Candlestick/index.js";
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
  CRYPTO_HISTORY_SET,
  CRYPTO_HISTORY_GET,
  CRYPTO_HISTORY_CLEAR,
  CRYPTO_BTC_CURRENT_USD,
} from "../actions.js";

export const initialState = {
  data: [],
  symbols: [],
  widgets: [],
  lineChart: [],
  table: [],
  item: [],
  history: [],
  btc_current_usd: [],
};

const cryptoReducer = (state = initialState, action) => {
  let rows = [];
  let btc = [];
  // console.log(state.data[0] ? state.data[0][0].marketData.current_price.usd : " no data");

  console.log(state, action ? action.payload : "NO ACTION YET");
  switch (action.type) {
    case CRYPTO_ADD:
      btc = [];
      return { ...state, data: [action.payload] };
    case CRYPTO_ALL:
      btc = state.data[0] && state.data[0][0].marketData.current_price.usd;
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

    case CRYPTO_HISTORY_SET:
      return { ...state, history: [action.payload] };
    case CRYPTO_HISTORY_GET:
      return { ...state, history: [...state.history] };
    case CRYPTO_HISTORY_CLEAR:
      return { ...state, history: [] };
    case CRYPTO_BTC_CURRENT_USD:
      // const btc_price = state.data[0]
      //   ? state.data[0][0].marketData.current_price.usd
      //   : 0;
      // if (state.btc_current_usd.length > 0) {
      //   state.data[0].btc_current_usd = [];
      // }
      return { ...state, btc_current_usd: [btc] };
    default:
      return state;
  }
};

export default cryptoReducer;
