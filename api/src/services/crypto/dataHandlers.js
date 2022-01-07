export const TransformChartData = (data) => {
  let chart = {
    prices: [],
    timeline: [],
  };
  data.data.prices.forEach((element) => {
    chart.prices.push(element[1]);
    chart.timeline.push(element[0]);
  });
  return chart;
};
