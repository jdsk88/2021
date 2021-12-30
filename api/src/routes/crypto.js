import express from "express";
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();
let data = await CoinGeckoClient.coins.all();
let currencies = [];
let symbols = [];
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

const routes = express.Router({});

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
routes.get("/currencies/widgetdata/:currency", async (req, res) => {
  const { currency } = req.params;
  const item = data.data.find((element) => element.symbol === currency);
  const widgetdata = {
    symbol: item.symbol,
    current: Object.keys(item.market_data.current_price).map(
      (key) => item.market_data.current_price[key]
    ),

    high24h: Object.keys(item.market_data.high_24h).map(
      (key) => item.market_data.high_24h[key]
    ),

    low24h: Object.keys(item.market_data.low_24h).map(
      (key) => item.market_data.low_24h[key]
    ),

    exchange: Object.keys(item.market_data.current_price).map((key) => key),
  };
  res.send(widgetdata);
});

export default routes;
