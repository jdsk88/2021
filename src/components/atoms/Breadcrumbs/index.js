import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Card, Grid } from "@mui/material";
import { FormattedMessage } from "react-intl";

export default function IconBreadcrumbs({ url }) {
  const str = url.replace(/\/+/g, " ");
  const split = str.split(" ").map((name) => name);
  let items = [];
  split.forEach((element) => {
    if (element !== "") {
      items.push(element);
    }
  });

  return (
    <Grid item xs={12} sm={12} md={12} height={75}>
      <Card
        sx={{
          height: "100%",
          lineHeight: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          padding: 2.5,
        }}
      >
        <Breadcrumbs
          separator="›"
          sx={{ fontSize: 25 }}
          aria-label="breadcrumb"
        >
          <Typography variant="h5" sx={{ fontSize: 25 }}>
            {/* <HomeIcon sx={{ fontSize: 25 }} /> */}
            <FormattedMessage id="breadcrumb_home" />
          </Typography>
          {items &&
            items.map((item, i) => (
              <Typography
                key={"breadcrumbs" + item + i}
                variant="h5"
                sx={{ fontSize: 25 }}
              >
                {/* <HomeIcon sx={{ fontSize: 25 }} /> */}
                <FormattedMessage id={item} />
              </Typography>
            ))}
        </Breadcrumbs>
      </Card>
    </Grid>
  );
}
