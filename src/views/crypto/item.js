import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, FormControl, NativeSelect, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ApexChart from "components/atoms/Dashboard/ApexChart";
import {
  CRYPTO_CODES,
  CRYPTO_CODES_GET,
  CRYPTO_WIDGETDATA,
  GLOBAL_CLICKER_STATE,
  CRYPTO_ITEM_GET,
  CRYPTO_ITEM_CLEAR,
  CRYPTO_HISTORY_GET,
  CRYPTO_ALL,
} from "store/actions";
import CryptoServices from "services/api/crypto";

function CoinContentItem() {
  const dispatch = useDispatch();
  let limit;
  React.useEffect(() => {
    CryptoServices.getWidgetData(dispatch, item[0] || "btc");
    CryptoServices.getSymbols(dispatch);
    CryptoServices.getAllHistoryData(dispatch, item[0] || "btc", limit);
    CryptoServices.getAllData(dispatch);
    dispatch({ type: CRYPTO_ALL });
    dispatch({ type: CRYPTO_CODES });
    dispatch({ type: CRYPTO_CODES_GET });
    dispatch({ type: GLOBAL_CLICKER_STATE });
    dispatch({ type: CRYPTO_WIDGETDATA });
    dispatch({ type: CRYPTO_ITEM_GET });
  }, [dispatch]);
  const data = useSelector((state) => state.crypto.data);
  const cryptocharts = useSelector((state) => state.crypto.widgets);
  const item = useSelector((state) => state.crypto.item);
  const crypto_symbols = useSelector((state) => state.crypto.symbols);
  const history = useSelector((state) => state.crypto.history);
  console.log(data.find((element) => element.symbol === "btc"));

  console.log(Array.from(data[0]).find((element) => element.symbol === "btc"));

  let price_history = [];
  let time_history = [];
  if (history.length > 0) {
    history.forEach((element) => {
      element.forEach((el) => {
        price_history.push(el.market_data.current_price.usd);
        let d = el.time.replace(/T/g, " ");
        let t = el.time.replace(/.000Z/g, " ");
        let dt = `${d} ${t}`;
        time_history.push();
        // }
      });
    });
  }

  console.log(price_history);

  const crypto = {
    height: 400,
    type: "bar",
    options: {
      chart: {
        id: "crypto-chart",
        // stacked: true,
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        width: 2,
      },
      xaxis: {
        categories: cryptocharts.length > 0 ? cryptocharts[0].exchange : null,
      },
    },
    series: [
      {
        data: cryptocharts.length > 0 ? cryptocharts[0].current : null,
      },
    ],
  };

  var chartData = {
    series: [
      {
        name: item ? item[0] : "",
        data: price_history.length > 0 ? price_history : [0],
      },
    ],
    type: "area",
    options: {
      chart: {
        id: "item_chart",
        toolbar: {
          show: false,
        },
        height: window.innerHeight - 165,
        zoom: {
          enabled: true,
        },
        sparkline: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      title: {
        text: item ? item[0] : "",
        align: "center",
      },
      grid: {
        row: {
          colors: ["black", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.04,
        },
      },
      xaxis: {
        categories: time_history,
      },
    },
  };

  var bar = {
    type: "bar",
    height: 400,
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["bitcoin", "etherum"],
      },
    },
    series: [
      {
        data: [500, 4000],
      },
    ],
  };

  const handleNativeSelect = (value) => {
    dispatch({ type: CRYPTO_ITEM_CLEAR });
    CryptoServices.getAllHistoryData(dispatch, value);
    dispatch({ type: CRYPTO_HISTORY_GET });
    CryptoServices.getWidgetData(dispatch, value);
  };

  return (
    <>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Card>
          <Typography textAlign="center" variant="h6">
            Choose cryptocurrency
          </Typography>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        xl={12}
        sx={{
          mt: 1,
          position: "sticky",
          top: 30,
          zIndex: 1030,
          background: "white",
        }}
      >
        <FormControl fullWidth>
          <NativeSelect
            variant="filled"
            fullWidth
            value={item.length < 0 ? null : item[0]}
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
      </Grid>

      <Grid item xs={12} sm={12} md={2} xl={2}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <Card>
              <Typography>{cryptocharts[0].name}</Typography>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <>
              <ApexChart data={bar} />
            </>
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={10} xl={10}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <Card>
              <Typography>{cryptocharts[0].name}</Typography>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <>
              <ApexChart data={crypto} />
            </>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <Card>
              <Typography>{cryptocharts[0].name}</Typography>
            </Card>
          )}
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <>
              <ApexChart data={optionsbig} />
            </>
          )}
        </Grid> */}
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <>
              <ApexChart data={chartData} />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default function CryptoCoinItem() {
  return <CoinContentItem />;
}
