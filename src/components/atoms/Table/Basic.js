import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { CRYPTO_CODES, CRYPTO_ITEM_SET } from "store/actions";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function BasicTable({ data, name }) {
  const dispatch = useDispatch();
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
            <TableCell>Charts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={row.image}
                    style={{
                      width: "30%",
                      objectFit: "scale-down",
                    }}
                  />
                  <Typography sx={{ width: "10%" }}>{"  "}</Typography>
                  <Typography sx={{ width: "60%" }}>{row.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.LastPrice}</TableCell>
              <TableCell>{row.prc}</TableCell>
              <TableCell>{row.Symbol}</TableCell>
              <TableCell>{row.dayHigh}</TableCell>
              <TableCell>{row.dayLow}</TableCell>
              <TableCell>{row.Coins}</TableCell>
              <TableCell>{row.MarketCup}</TableCell>
              <TableCell>
                <Button
                  component={Link}
                  to={"/dashboard/cryptocurrecy/item"}
                  onClick={() => {
                    dispatch({ type: CRYPTO_ITEM_SET, payload: row.Symbol });
                  }}
                  variant="contained"
                >
                  more
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
