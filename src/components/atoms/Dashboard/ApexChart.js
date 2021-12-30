import Chart from "react-apexcharts";
import PropTypes from "prop-types";

import { Card } from "@mui/material";

const ApexChart = ({ data }) => {
  return (
    <Card>
      <Chart {...data} />
    </Card>
  );
};
ApexChart.propTypes = {
  data: PropTypes.object,
};
export default ApexChart;
