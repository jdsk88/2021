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
} from "../actions.js";

export const initialState = {
  data: [],
  symbols: [],
  widgets: [],
  lineChart: [],
  table: [],
};

const cryptoReducer = (state = initialState, action) => {
  let rows = [];
  console.log(state.data);
  // state.data[0].forEach((element, i) => {
  //   rows.push({
  //     name: element.name.name,
  //     image: element.name.image.small,
  //     LastPrice: element.marketData.current_price.usd,
  //     prc: element.marketData.price_change_percentage_24h,
  //     Symbol: element.name.symbol,
  //     dayHigh: element.marketData.high_24h.usd,
  //     dayLow: element.marketData.low_24h.usd,
  //     dayPriceChart: element.marketData.market_cap_change_24h_in_currency.usd,
  //     Coins: element.marketData.total_supply,
  //     MarketCup: element.marketData.total_volume.usd,
  //   });
  // });
  // state.table = rows;

  console.log(state, action ? action : "NO ACTION YET");
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
    default:
      return state;
  }
};

export default cryptoReducer;
