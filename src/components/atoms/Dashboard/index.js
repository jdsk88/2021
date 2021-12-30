import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { Button, NativeSelect, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import EventInfo from "./Click";
import HLLineChart from "./LineHLC.js";
import ApexChart from "./ApexChart";
import {
  CRYPTO_ALL,
  CRYPTO_CODES,
  CRYPTO_CODES_GET,
  CRYPTO_WIDGETDATA,
  GLOBAL_CLICKER_STATE,
} from "store/actions";
import dataa from "store/data/charts/AreaChart";
import getAllCryptoData from "services/Language/api/crypto";
import CryptoServices from "services/Language/api/crypto";
function DashboardContent() {
  const mdTheme = createTheme();
  const dispatch = useDispatch();
  const charts = useSelector((state) => state.dashboard.charts);
  const cryptocharts = useSelector((state) => state.crypto.widgets);
  const cryptocurrencies = useSelector((state) => state.crypto.data);
  const crypto_symbols = useSelector((state) => state.crypto.symbols);
  console.log(crypto_symbols);
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
  const theme = useTheme();
  // console.log(clicks, clxarr);
  const data = [
    {
      type: "bar",
      height: 260,
      options: {
        chart: {
          id: "new-stack-chart",
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: true,
          },
          x: {
            show: false,
          },
          y: {
            title: "Stock - ",
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        { name: "1", data: clxarr },
        { name: "2", data: clxarr },
      ],
    },
    {
      type: "bar",
      height: 260,
      options: {
        chart: {
          id: "new-stack-chart",
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: "Stock - ",
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        {
          data: [66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
    },
    {
      height: 600,
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
            enabled: true,
          },
        },
        dataLabels: {
          enabled: true,
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
            stops: [0, 80, 100],
          },
        },
        legend: {
          show: true,
        },
        yaxis: {
          min: 1,
          max: 1000000,
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "clientX",
          data: xarr,
        },
        {
          name: "clientY",
          data: yarr,
        },
      ],
    },
  ];
  const crypto = {
    height: 350,
    type: "bar",
    options: {
      chart: {
        id: "crypto-chart",
        stacked: true,
        // stackType: "100%",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          // columnWidth: "100%",
          distributed: true,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      xaxis: {
        categories: cryptocharts.length > 0 ? cryptocharts[0].exchange : null,
      },
    },
    series: [
      {
        name: cryptocharts.length > 0 ? cryptocharts[0].symbol : null,
        data: cryptocharts.length > 0 ? cryptocharts[0].current : null,
      },
    ],
  };

  const line = {
    height: 600,
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
          enabled: true,
        },
      },
      dataLabels: {
        enabled: true,
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
          stops: [0, 80, 100],
        },
      },
      legend: {
        show: true,
      },
      yaxis: {
        min: 1,
        max: 1000000,
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "clientX",
        data: xarr,
      },
      {
        name: "clientY",
        data: yarr,
      },
    ],
  };
  const handleNativeSelect = (value) => {
    CryptoServices.getWidgetData(dispatch, value);
  };
  React.useEffect(() => {
    CryptoServices.getSymbols(dispatch);
    dispatch({ type: CRYPTO_CODES });
    dispatch({ type: CRYPTO_CODES_GET });
    dispatch({ type: GLOBAL_CLICKER_STATE });
    dispatch({ type: CRYPTO_WIDGETDATA });
    dispatch({ type: CRYPTO_ALL });
  }, [dispatch]);
  return (
    <>
      <Grid item xs={12} sm={12} md={12}>
        <NativeSelect
          fullWidth
          onChange={(e) => handleNativeSelect(e.currentTarget.value)}
        >
          <option disabled value={"btc"}>
            Choose cryptocurrency (default: btc)
          </option>
          {crypto_symbols[1] &&
            crypto_symbols[1].map((symbol) => (
              <option value={symbol}>{symbol}</option>
            ))}
        </NativeSelect>
        {cryptocharts.length < 1 ? <></> : <ApexChart data={crypto} />}
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
