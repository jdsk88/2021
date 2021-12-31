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
} from "store/actions";
import CryptoServices from "services/api/crypto";
function CoinContent() {
  const dispatch = useDispatch();

  const cryptocharts = useSelector((state) => state.crypto.widgets);
  const crypto_symbols = useSelector((state) => state.crypto.symbols);
  const clicks = useSelector((state) => state.global.clicks);
  let clxarr = [];
  clicks.forEach((click, i) => {
    clxarr.push(i);
  });
  let xarr = [];
  clicks.forEach((click, i) => {
    xarr.push(click.clientX);
  });
  let yarr = [];
  clicks.forEach((click, i) => {
    yarr.push(click.clientY);
  });

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
        // name: cryptocharts.length > 0 ? cryptocharts[0].symbol : null,
        data: cryptocharts.length > 0 ? cryptocharts[0].current : null,
      },
    ],
  };

  var options = {
    height: 400,
    type: "area",
    options: {
      chart: {
        id: "market-sale-chart",
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
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        },
      },
      legend: {
        show: false,
      },
      yaxis: {
        min: 1,
        max: 100,
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: cryptocharts[0] ? cryptocharts[0].name : null,
        data: cryptocharts.length > 0 ? cryptocharts[0].current : null,
      },
    ],
  };

  var optionsbig = {
    height: window.innerHeight - 165,
    type: "area",
    options: {
      chart: {
        id: "market-sale-chart",
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
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        },
      },
      legend: {
        show: false,
      },
      yaxis: {
        min: 1,
        max: 100,
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: cryptocharts[0] ? cryptocharts[0].name : null,
        data: cryptocharts.length > 0 ? cryptocharts[0].current : null,
      },
    ],
  };

  const handleNativeSelect = (value) => {
    CryptoServices.getWidgetData(dispatch, value);
  };
  React.useEffect(() => {
    CryptoServices.getSymbols(dispatch);
    CryptoServices.getLineChartData(dispatch);
    dispatch({ type: CRYPTO_CODES });
    dispatch({ type: CRYPTO_CODES_GET });
    dispatch({ type: GLOBAL_CLICKER_STATE });
    dispatch({ type: CRYPTO_WIDGETDATA });
  }, [dispatch]);
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
              <ApexChart data={options} />
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
        <Grid item xs={12} sm={12} md={12} xl={12}>
          {cryptocharts.length < 1 ? (
            <></>
          ) : (
            <>
              <ApexChart data={optionsbig} />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default function CryptoCoin() {
  return <CoinContent />;
}
