//1. Import coingecko-api
import CoinGecko from "coingecko-api";
import { TransformChartData } from "./dataHandlers.js";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

export const CoinGeckoServices = {
  ping: async () => {
    let data = await CoinGeckoClient.ping();
    return data;
  },
  global: async () => {
    let data = await CoinGeckoClient.global();
    return data;
  },
  list: async () => {
    let data = await CoinGeckoClient.coins.list();
    return data;
  },

  markets: async () => {
    let data = await CoinGeckoClient.coins.markets();
    return data;
  },

  fetch: async () => {
    let data = await CoinGeckoClient.coins.fetch("bitcoin", {});
    return data;
  },

  fetchTickers: async (currency) => {
    let data = await CoinGeckoClient.coins.fetchTickers(currency);
    return data;
  },

  fetchHistory: async (currency, date) => {
    // date format "30-12-2017"
    let data = await CoinGeckoClient.coins.fetchHistory(currency, {
      date: date,
    });
    return data;
  },

  fetchMarketChart: async (currency) => {
    let data = await CoinGeckoClient.coins.fetchMarketChart(currency);
    let dataTransformed = TransformChartData(data)
    return dataTransformed;
  },
  fetchMarketChartRange: async (currency, from, to) => {
    let data = await CoinGeckoClient.coins.fetchMarketChartRange(currency, {
      from: 1392577232,
      to: 1422577232,
    });
    return data;
  },
  fetchStatusUpdates: async (platform) => {
    // ex. "binance"
    let data = await CoinGeckoClient.exchanges.fetchStatusUpdates(platform);
    return data;
  },
  fetchVolumeChart: async (platform) => {
    // ex. "binance"
    let data = await CoinGeckoClient.exchanges.fetchVolumeChart(platform, {
      days: 1,
    });
    return data;
  },
  statusUpdates: async () => {
    let data = await CoinGeckoClient.statusUpdates.all();
    return data;
  },
  events: async () => {
    let data = await CoinGeckoClient.events.all();
    return data;
  },
  fetchTypes: async () => {
    let data = await CoinGeckoClient.events.fetchTypes();
    return data;
  },
  exchangeRates: async () => {
    let data = await CoinGeckoClient.exchangeRates.all();
    return data;
  },

  simplePrice: async (ids, vs_currencies) => {
    //  type array ex. ids: ["bitcoin", "ethereum"] vs_currencies ["eur", "usd"]
    let data = await CoinGeckoClient.simple.price({
      ids: currencies,
      vs_currencies: vs_currencies,
    });
    return data;
  },
  supportedVsCurrencies: async () => {
    let data = await CoinGeckoClient.simple.supportedVsCurrencies();
    return data;
  },
  fetchTokenPrice: async (zrx) => {
    // 0x contract address (as a test)
    var zrx = zrx; // string "0xe41d2489571d322189246dafa5ebde1f4699f498"
    let data = await CoinGeckoClient.simple.fetchTokenPrice({
      contract_addresses: zrx,
      vs_currencies: "usd",
    });
    return data;
  },
  finance_fetchPlatforms: async () => {
    let data = await CoinGeckoClient.finance.fetchPlatforms();
    return data;
  },
  finance_fetchProducts: async () => {
    let data = await CoinGeckoClient.finance.fetchProducts();
    return data;
  },
  indexes: async () => {
    let data = await CoinGeckoClient.indexes.all();
    return data;
  },
  indexes_List: async () => {
    let data = await CoinGeckoClient.indexes.list();
    return data;
  },
  indexderivatives_fetchTickersesList: async () => {
    let data = await CoinGeckoClient.derivatives.fetchTickers();
    return data;
  },
  derivatives_fetchExchange: async (exchangeID) => {
    // ex. "bitmex"
    let testExchangeId = exchangeID; // as a test
    let data = await CoinGeckoClient.derivatives.fetchExchange(testExchangeId);
    return data;
  },
  derivatives_listExchanges: async () => {
    let data = await CoinGeckoClient.derivatives.listExchanges();
    return data;
  },
};
