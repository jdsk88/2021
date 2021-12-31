import * as React from "react";
import { createTheme } from "@mui/material/styles";

import Grid from "@mui/material/Grid";

import { Card, FormControl, NativeSelect, Typography } from "@mui/material";
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
import CryptoServices from "services/api/crypto";
import BasicTable from "../Table/Basic";
function DashboardContent() {
  const dispatch = useDispatch();

  const cryptocharts = useSelector((state) => state.crypto.widgets);
  const cryptocurrencies = useSelector((state) => state.crypto.data);
  const crypto_symbols = useSelector((state) => state.crypto.symbols);
  const line_chart = useSelector((state) => state.crypto.lineChart);
  console.log(line_chart[0]);
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
  const timeline = {
    type: "bar",
    height: 600,
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
        categories: cryptocharts.length > 0 ? cryptocharts[0].exchange : null,
      },
    },
    series: [
      {
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

  var options2 = {
    type: "line",
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
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
     <Grid item xs={12} sm={12} md={12} xl={12}>
        <Card>
          <Typography textAlign="center" variant="h6">
            
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        {cryptocurrencies.length < 1 ? (
          <></>
        ) : (
          <Card>
            <BasicTable name={"Currency"} />
          </Card>
        )}
      </Grid>

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

export default function Dashboard() {
  return <DashboardContent />;
}
