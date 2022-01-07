import { Outlet } from "react-router-dom";
import {
  Box,
  useMediaQuery,
  CssBaseline,
  Container,
  Grid,
} from "@mui/material";
import { StyledMain } from "./Main";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  GLOBAL_CLICKER_STATE,
  GLOBAL_MOUSE_CLICK_COUNTER,
  SET_MENU_STATE,
} from "store/actions";
import SideMenu from "./SideMenu";
import PrimarySearchAppBar from "./Header";
import { Wrapper } from "components/atoms/Wrapper/Wrapper";
import IconBreadcrumbs from "components/atoms/Breadcrumbs";
import React, { useState, useEffect } from "react";

const LayoutMain = () => {
  const theme = useTheme();
  const resizer = useMediaQuery(theme.breakpoints.down("md"));
  const menuOpened = useSelector((state) => state.configuration.opened);
  const clicks = useSelector((state) => state.global.clicks);
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch({ type: SET_MENU_STATE, opened: !menuOpened });
  };
  const url = window.location.pathname;
  const [URL, setURL] = useState("/");
  useEffect(() => {
    setURL(url);
  }, [url]);

  useEffect(() => {
    dispatch({ type: GLOBAL_CLICKER_STATE });
  }, [url, dispatch]);

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
          onClick={(e) => {
            dispatch({ type: GLOBAL_MOUSE_CLICK_COUNTER, payload: e });
            dispatch({ type: GLOBAL_CLICKER_STATE });
          }}
          theme={theme}
          open={menuOpened}
          resizer={resizer ? { size: "mobile" } : { size: "desktop" }}
        >
          <Wrapper>
            <Container
              maxWidth="xxl"
              component="main"
              sx={{ pt: 0, pb: 3, mt: 1, background: "#070d3e" }}
            >
              <Grid container spacing={1} alignItems="flex-end">
                <IconBreadcrumbs url={URL} />
                <Outlet />
              </Grid>
            </Container>
          </Wrapper>
        </StyledMain>
      </Box>
    </>
  );
};

export default LayoutMain;
