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
  CRYPTO_BTC_CURRENT_USD,
} from "store/actions";
import CryptoServices from "services/api/crypto";
import { element } from "prop-types";
import moment from "moment";
import { Box } from "@mui/system";

function CoinContentItem() {
  const dispatch = useDispatch();
  let limit = 1000000000000;
  React.useEffect(() => {
    CryptoServices.getWidgetData(dispatch, item[0] || "btc");
    CryptoServices.getSymbols(dispatch);
    CryptoServices.getAllHistoryData(dispatch, item[0] || "btc", limit);
    CryptoServices.getAllData(dispatch);
    dispatch({ type: CRYPTO_ALL });
    dispatch({ type: CRYPTO_BTC_CURRENT_USD });
    dispatch({ type: CRYPTO_CODES });
    dispatch({ type: CRYPTO_CODES_GET });
    dispatch({ type: GLOBAL_CLICKER_STATE });
    dispatch({ type: CRYPTO_WIDGETDATA });
    dispatch({ type: CRYPTO_ITEM_GET });
  }, [dispatch]);

  const data = useSelector((state) => state.crypto.data);
  const cryptocharts = useSelector((state) => state.crypto.widgets);

  const item_price = cryptocharts[0] ? cryptocharts[0].price.usd : 0;
  const item_name = cryptocharts[0] ? cryptocharts[0].name : undefined;

  const item = useSelector((state) => state.crypto.item);
  const crypto_symbols = useSelector((state) => state.crypto.symbols);
  const history = useSelector((state) => state.crypto.history);

  let price_history = [];
  let time_history = [];
  let time_history_NewDate = [];

  if (history.length > 0) {
    history.forEach((element) => {
      element.forEach((el) => {
        price_history.push(el.market_data.current_price.usd);
        let d = el.time.replace(/T/g, " ");
        let t = el.time.replace(/.000Z/g, " ");
        let dt = `${d} ${t}`;
        time_history.push(Date.parse(el.time));
      });
    });
  }
  console.log(time_history);
  console.log(
    new Date(time_history[0]).getFullYear(),
    new Date(time_history[0]).getMonth(),
    new Date(time_history[0]).getDay(),
    new Date(time_history[0]).getHours(),
    new Date(time_history[0]).getMinutes()
  );
  if (time_history.length > 0) {
    time_history.forEach((element) => {
      time_history_NewDate.push(moment(element).format("YYYY MMM Do, h:mm:ss"));
      // time_history_NewDate.push(new Date(element));
    });
  }
  console.log(time_history_NewDate);

  const crypto = {
    height: 400,
    type: "bar",
    options: {
      chart: {
        id: "crypto-chart",
        // stacked: true,
        zoom: {
          enabled: false,
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
        name: cryptocharts.length > 0 ? cryptocharts[0].name : null,
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
    height: 400,
    options: {
      chart: {
        id: "item_chart",
        toolbar: {
          show: true,
        },
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
        categories: time_history_NewDate,
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
        categories: [
          // "bitcoin",
          item_name,
        ],
      },
    },
    series: [
      {
        data: [
          // btc_price,
          item_price.toFixed(2),
        ],
      },
    ],
  };

  const handleNativeSelect = (value) => {
    dispatch({ type: CRYPTO_ITEM_CLEAR });
    CryptoServices.getAllHistoryData(dispatch, value);
    dispatch({ type: CRYPTO_HISTORY_GET });
    CryptoServices.getWidgetData(dispatch, value);
  };
  const [loader, setLoading] = React.useState(false);
  const handleNativeSelectFilter = (limit) => {
    CryptoServices.getAllHistoryData(dispatch, cryptocharts[0].symbol, limit)
      .then(() => setLoading(true))
      .finally(() => {
        setLoading(false);
      });
    dispatch({ type: CRYPTO_HISTORY_GET });
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
              {/* <Typography>{`btc <-> ${cryptocharts[0].symbol}`}</Typography> */}
              <Typography>{item_name}</Typography>
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
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography>{cryptocharts[0].name} timeline chart</Typography>

              <FormControl>
                <NativeSelect
                  variant="filled"
                  onChange={(e) =>
                    handleNativeSelectFilter(e.currentTarget.value)
                  }
                >
                  {[
                    { name: "1 hour", value: 10 },
                    { name: "5 hour", value: 50 },
                    { name: "1 day", value: 240 },
                    { name: "1 month", value: 7200 },
                    { name: "1 year", value: 87600 },
                  ].map((symbol) => (
                    <option value={symbol.value}>{symbol.name}</option>
                  ))}
                </NativeSelect>
              </FormControl>
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
              {loader == true ? (
                <h1>LOADER</h1>
              ) : (
                <ApexChart data={chartData} />
              )}
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
