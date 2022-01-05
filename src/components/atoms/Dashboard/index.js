import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CRYPTO_ALL,
  CRYPTO_CODES,
  CRYPTO_CODES_GET,
  CRYPTO_WIDGETDATA,
  GLOBAL_CLICKER_STATE,
} from "store/actions";
import CryptoServices from "services/api/crypto";
import { Box } from "@mui/system";
import { Button, FormControl, Grid, NativeSelect } from "@mui/material";

function DashboardContent() {
  const dispatch = useDispatch();

  const cryptocharts = useSelector((state) => state.crypto.widgets);
  const cryptocurrencies = useSelector((state) => state.crypto.data);
  const crypto_symbols = useSelector((state) => state.crypto.symbols);
  const line_chart = useSelector((state) => state.crypto.lineChart);
  const handleNativeSelect = (value) => {
    CryptoServices.getWidgetData(dispatch, value);
  };
  React.useEffect(() => {
    CryptoServices.getAllData(dispatch);
    CryptoServices.getSymbols(dispatch);
    CryptoServices.getLineChartData(dispatch);
    dispatch({ type: CRYPTO_CODES });
    dispatch({ type: CRYPTO_CODES_GET });
    dispatch({ type: GLOBAL_CLICKER_STATE });
    dispatch({ type: CRYPTO_WIDGETDATA });
    dispatch({ type: CRYPTO_ALL });
  }, [dispatch]);
  return (
    <>
      <Grid item xs={12} sm={12} md={12} xl={12} mt={2}>
        <FormControl fullWidth>
          <NativeSelect
            variant="filled"
            fullWidth
            onChange={(e) => handleNativeSelect(e.currentTarget.value)}
          >
            <option disabled value={"btc"}>
              Select card type : (default: linear chart)
            </option>
            {crypto_symbols[0] &&
              crypto_symbols[0].map((symbol) => (
                <option value={symbol}>{symbol}</option>
              ))}
          </NativeSelect>
        </FormControl>
        <FormControl fullWidth>
          <NativeSelect
            variant="filled"
            fullWidth
            onChange={(e) => handleNativeSelect(e.currentTarget.value)}
          >
            <option disabled value={"btc"}>
              Choose cryptocurrency (default: btc)
            </option>
            {crypto_symbols[0] &&
              crypto_symbols[0].map((symbol) => (
                <option value={symbol}>{symbol}</option>
              ))}
          </NativeSelect>
        </FormControl>
        <Button variant="contained" fullWidth>
          Add new cart
        </Button>
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
