import Chart from "react-apexcharts";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import { Box, Card, Grid, Typography } from "@mui/material";

const ApexChart = ({ data }) => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card>
        <Chart {...data} />
      </Card>
    </Grid>
  );
};
ApexChart.propTypes = {
  data: PropTypes.object,
};
export default ApexChart;
