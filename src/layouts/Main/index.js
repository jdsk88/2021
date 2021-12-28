import { Outlet } from "react-router-dom";
import { Box, useMediaQuery, CssBaseline } from "@mui/material";
import { StyledMain } from "./Main";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { SET_MENU_STATE } from "store/actions";
import SideMenu from "./SideMenu";
import PrimarySearchAppBar from "./Header";
import { Wrapper } from "components/atoms/Wrapper/Wrapper";

const LayoutMain = () => {
  const theme = useTheme();
  const resizer = useMediaQuery(theme.breakpoints.down("md"));
  const menuOpened = useSelector((state) => state.configuration.opened);
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch({ type: SET_MENU_STATE, opened: !menuOpened });
  };

  return (
    <>
      <PrimarySearchAppBar drawerToggle={handleMenuToggle} />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <SideMenu drawerOpen={menuOpened} drawerToggle={handleMenuToggle} />
        <StyledMain
          theme={theme}
          open={menuOpened}
          resizer={resizer ? { size: "mobile" } : { size: "desktop" }}
        >
          <Wrapper>
            <Outlet />
          </Wrapper>
        </StyledMain>
      </Box>
    </>
  );
};

export default LayoutMain;
