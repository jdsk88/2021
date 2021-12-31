import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export default function BasicTable({ data, name }) {
  const cryptocurrencies = useSelector((state) => state.crypto.data);
  let rows = [];
  if (cryptocurrencies[0].length > 1) {
    cryptocurrencies[0].forEach((element, i) => {
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
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ display: "flex" }}>
              <Typography>{name}</Typography>
            </TableCell>
            <TableCell>Last Price</TableCell>
            <TableCell>%</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>24 High</TableCell>
            <TableCell>24 Low</TableCell>
            <TableCell>Coins</TableCell>
            <TableCell>Market Cup</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <img
                  src={row.image}
                  style={{
                    width: "30%",
                    height: "25px",
                    objectFit: "scale-down",
                  }}
                />
                <Typography sx={{ width: "70%" }}>{row.name}</Typography>
              </TableCell>
              <TableCell>{row.LastPrice}</TableCell>
              <TableCell>{row.prc}</TableCell>
              <TableCell>{row.Symbol}</TableCell>
              <TableCell>{row.dayHigh}</TableCell>
              <TableCell>{row.dayLow}</TableCell>
              <TableCell>{row.Coins}</TableCell>
              <TableCell>{row.MarketCup}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
