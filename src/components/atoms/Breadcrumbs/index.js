import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Card, Grid } from "@mui/material";
import { FormattedMessage } from "react-intl";

export default function IconBreadcrumbs({ url }) {
  let items = [];
  // React.useEffect(() => {
    const str = url.replace(/\/+/g, " ");
    const split = str.split(" ").map((name) => name);
    split.forEach((element) => {
      if (element !== "") {
        items.push(element);
      }
    });
  // }, [url]);

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      height={25}
      sx={{ position: "sticky", top: -5, zIndex: 1031 }}
    >
      <Card
        sx={{
          height: "100%",
          lineHeight: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          padding: 1.5,
          border: "1px solid silver",
          boxSizing: "border-box",
        }}
      >
        <Breadcrumbs
          separator="›"
          sx={{ fontSize: 12.5 }}
          aria-label="breadcrumb"
        >
          <Typography sx={{ fontSize: 12.5 }}>
            {/* <HomeIcon sx={{ fontSize: 12.5}} /> */}
            <FormattedMessage id="breadcrumb_home" />
          </Typography>
          {items &&
            items.map((item, i) => (
              <Typography
                key={"breadcrumbs" + item + i}
                sx={{ fontSize: 12.5 }}
              >
                {/* <HomeIcon sx={{ fontSize: 12.5}} /> */}
                <FormattedMessage id={item} />
              </Typography>
            ))}
        </Breadcrumbs>
      </Card>
    </Grid>
  );
}
