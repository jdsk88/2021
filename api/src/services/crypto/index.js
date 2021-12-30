//1. Import coingecko-api
import CoinGecko from "coingecko-api";

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
let func = async () => {
  let data = await CoinGeckoClient.ping();
  let data2 = await CoinGeckoClient.coins.all();
  console.log(data2.data[0].market_data);
  return data;
};
func();
