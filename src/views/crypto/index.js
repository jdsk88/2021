import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoServices from "services/api/crypto";
import CryptoTable from "./table";

const CryptoDashboardPage = () => {
  const data = useSelector((state) => state.crypto.data);
  let rows = [];
  const dispatch = useDispatch();
  useEffect(() => {
    CryptoServices.getAllData(dispatch);
  }, []);

  data[0].forEach((element, i) => {
    rows.push({
      name: element.name.name,
      image: element.name.image.small,
      LastPrice: element.marketData.current_price.usd,
      prc: element.marketData.price_change_percentage_24h,
      Symbol: element.name.symbol,
      dayHigh: element.marketData.high_24h.usd,
      dayLow: element.marketData.low_24h.usd,
      dayPriceChart: element.marketData.market_cap_change_24h_in_currency.usd,
      Coins: element.marketData.total_supply,
      MarketCup: element.marketData.total_volume.usd,
    });
  });

  return <CryptoTable rows={rows} />;
};
export default CryptoDashboardPage;
