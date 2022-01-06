import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CRYPTO_ALL } from "store/actions";
import CryptoServices from "services/api/crypto";
import BasicTable from "components/atoms/Table/Basic";
function DashboardContent() {
  const dispatch = useDispatch();
  const cryptocurrencies = useSelector((state) => state.crypto.data);
  React.useEffect(() => {
    CryptoServices.getAllData(dispatch);
    dispatch({ type: CRYPTO_ALL });
  }, [dispatch]);
  return (
    <>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Card>
          <Typography textAlign="center" variant="h6"></Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        {cryptocurrencies.length < 1 ? (
          <></>
        ) : (
          <Card>
            <BasicTable name={"Currency"} />
          </Card>
        )}
      </Grid>
    </>
  );
}

export default function CrypotTable() {
  return <DashboardContent />;
}
