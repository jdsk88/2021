import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const LayoutMain = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default LayoutMain;
