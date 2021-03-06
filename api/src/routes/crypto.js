import express from "express";
import CoinGecko from "coingecko-api";
import { CryptoServices } from "../services/crypto/index.js";
import { CoinGeckoServices } from "../services/crypto/cryptotest.js";

const CoinGeckoClient = new CoinGecko();
let data = await CoinGeckoClient.coins.all();
let currencies = [];
let symbols = [];
let lineChartData = [];

data.data.forEach((element) => {
  currencies.push({
    id: element.id,
    name: element,
    symbol: element.symbol,
    image: element.image,
    marketData: element.market_data,
    last_updated: element.last_updated,
    localization: element.localization,
  });
});
data.data.forEach((element) => {
  symbols.push(element.symbol);
});
data.data.forEach((element) => {
  lineChartData.push({
    name: element.name,
    price: element.market_data.current_price.usd,
    timeline: element.market_data.current_price.usd,
  });
});

const routes = express.Router({});
routes.get("/database/:symbol/:limit", async (req, res) => {
  const { symbol, limit } = req.params;
  console.log(limit);
  let LIMIT = 0;
  if (limit == "24hours") {
    LIMIT = 144;
  } else if (limit == "1hour") {
    LIMIT = 10;
  } else if (limit == "5hour") {
    LIMIT = 30;
  } else if (limit == "10hour") {
    LIMIT = 60;
  }
  const result = await CryptoServices.getCryptoData({ symbol, limit });
  console.log(limit);
  res.send(result);
});

routes.get("/currencies", async (req, res) => {
  res.send(symbols);
});
routes.get("/currencies/all", async (req, res) => {
  res.send(currencies);
});
routes.get("/currencies/:currency", async (req, res) => {
  const { currency } = req.params;
  const item = data.data.find((element) => element.symbol === currency);
  res.send(item);
});
routes.get("/currencies/widgetdata/lineChart", async (req, res) => {
  res.send(lineChartData);
});

routes.get("/currencies/widgetdata/:currency", async (req, res) => {
  const { currency } = req.params;
  const item = data.data.find((element) => element.symbol === currency);
  const widgetdata = {
    symbol: item.symbol,
    current: Object.keys(item.market_data.current_price).map((key) =>
      item.market_data.current_price[key] <= 10000
        ? item.market_data.current_price[key]
        : null
    ),

    high24h: Object.keys(item.market_data.high_24h).map(
      (key) => item.market_data.high_24h[key]
    ),

    low24h: Object.keys(item.market_data.low_24h).map(
      (key) => item.market_data.low_24h[key]
    ),

    exchange: Object.keys(item.market_data.current_price).map((key) => key),
    name: item.name,
    price: item.market_data.current_price,
  };
  res.send(widgetdata);
});

routes.get("/coingeckoapi/history/:currency/:date", async (req, res) => {
  const { currency, date } = req.params;
  const result = await CoinGeckoServices.fetchHistory(currency,date);
  console.log(result);
  res.send(result);
});
routes.get("/coingeckoapi/chart/:currency", async (req, res) => {
  const { currency } = req.params;
  const result = await CoinGeckoServices.fetchMarketChart(currency);
  console.log(result);
  res.send(result);
});

export default routes;
