import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

export default function DataTable() {
  const cryptocurrencies = useSelector((state) => state.crypto.data);
  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "image", headerName: "Logo", width: 100 },
    { field: "name", headerName: "Currency", width: 130 },
    { field: "LastPrice", headerName: "Last Price", width: 130 },
    { field: "prc", headerName: "%", width: 70 },
    { field: "Symbol", headerName: "Track", width: 70 },
    { field: "dayHigh", headerName: "24h High ", width: 70 },
    { field: "dayLow", headerName: "24h Low", width: 130 },
    { field: "Coins", headerName: "Total Coins ", width: 130 },
    { field: "MarketCup", headerName: "Market Cup", width: 130 },
  ];

  let rows = [];
  cryptocurrencies[0].forEach((element, i) => {
    // console.log(element);
    rows.push({
      id: i,
      image: <image src={element.name.image.small} />,
      name: element.name.name,
      LastPrice: element.marketData.current_price.usd,
      prc: element.marketData.price_change_percentage_24h,
      Symbol: element.name.symbol,
      dayHigh: element.marketData.high_24h.usd,
      dayLow: element.marketData.low_24h.usd,
      Coins: element.marketData.total_supply,
      MarketCup: element.marketData.total_volume.usd,
    });
  });

  return (
    <div style={{ height: window.innerHeight - 105, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        onCellClick={() => {
          console.log("is here ?");
          dispatch({ type: CRYPTO_ITEM_SET, payload: row.Symbol });
        }}
      />
    </div>
  );
}
