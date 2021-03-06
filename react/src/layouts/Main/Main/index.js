import { styled } from "@mui/material/styles";
export const StyledMain = styled(
  "main",
  {}
)(({ resizer }) => ({
  width: "100%",
  height: resizer ? "calc(100vh - 48px)" : "calc(100vh - 56px)",
}));
