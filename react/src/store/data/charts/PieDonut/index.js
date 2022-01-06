const donut = {
  height: 228,
  type: "donut",
  options: {
    chart: {
      id: "revenue-chart",
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Youtube", "Facebook", "Twitter"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inherit",
      labels: {
        colors: "inherit",
      },
      itemMargin: {
        horizontal: 10,
        vertical: 10,
      },
    },
  },
  series: [1258, 975, 500],
};
const pie = {
  height: 300,
  type: "pie",
  options: {
    chart: {
      id: "satisfaction-chart",
    },
    labels: ["extremely Satisfied", "Satisfied", "Poor", "Very Poor"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inherit",
      labels: {
        colors: "inherit",
      },
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    theme: {
      monochrome: {
        enabled: true,
      },
    },
  },
  series: [66, 50, 40, 30],
};

export const data = { donut: donut, pie: pie };
