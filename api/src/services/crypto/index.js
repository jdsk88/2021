//1. Import coingecko-api
import CoinGecko from "coingecko-api";
import moment from "moment";
import { Crypto } from "../../models/crypto.js";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
let data = await CoinGeckoClient.coins.all();

const getCryptoData = async () => {
  return Crypto.find();
};


const createCryptoData = async ({
  symbol,
  name,
  block_time_in_minutes,
  image,
  market_data,
  last_updated,
  localization,
}) => {
  const result = new Crypto({
    symbol,
    name,
    block_time_in_minutes,
    image,
    market_data,
    last_updated,
    localization,
  });
  return result.save();
};
setInterval(() => {
  console.log("saved");
  data.data.forEach((element) => {
    console.log(element);
    const autoSaveCryptoData = new Crypto({
      time: moment().format(),
      symbol: element.symbol,
      name: element.name,
      block_time_in_minutes: element.block_time_in_minutes,
      image: element.image,
      market_data: element.market_data,
      last_updated: element.last_updated,
      localization: element.localization,
    });
    autoSaveCryptoData.save();
  });
}, 600000);

export const CryptoServices = {
  getCryptoData: getCryptoData,
  createCryptoData: createCryptoData,
};
