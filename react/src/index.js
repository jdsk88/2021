import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store/store";
import config from "config";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { SnackbarProvider } from "notistack";
import Zoom from "@mui/material/Zoom";
import "resize-observer-polyfill/dist/ResizeObserver.global";

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={Zoom}
      iconVariant={{
        success: "✅",
        error: "✖️",
        warning: "⚠️",
        info: "ℹ️",
      }}
      maxSnack={3}
    >
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
