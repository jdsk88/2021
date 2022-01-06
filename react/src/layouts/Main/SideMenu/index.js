import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer,  useMediaQuery } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserView, MobileView } from "react-device-detect";

import { drawerWidth } from "store/constants";
import MenuList from "./List";
import { LanguageSelector } from "services/Language/select";

const SideMenu = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const resizer = useMediaQuery(theme.breakpoints.up("md"));
  const menuItems = (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Box sx={{ display: "flex", p: 1, mx: "auto" }}></Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: resizer ? "calc(100% - 56px)" : "calc(100% - 48px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <MenuList />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box
          sx={{
            px: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <MenuList />
          <Box
            sx={{
              width: "100%",
              height: 25,
            }}
          >
            <LanguageSelector fullWidth />
          </Box>
        </Box>
      </MobileView>
    </>
  );

  const windowCheck =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      {!drawerOpen ? (
        <></>
      ) : (
        <Box
          component="nav"
          sx={{
            flexShrink: { md: 0 },
            width: resizer ? drawerWidth : "auto",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={windowCheck}
            variant={resizer ? "persistent" : "temporary"}
            anchor="left"
            open={drawerOpen}
            onClose={drawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                width: resizer ? drawerWidth : "100%",
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                borderRight: "none",
                [theme.breakpoints.up("md")]: {
                  top: "64px",
                },
              },
            }}
            ModalProps={{ keepMounted: true }}
            color="inherit"
          >
            {menuItems}
          </Drawer>
        </Box>
      )}
    </>
  );
};

SideMenu.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default SideMenu;
