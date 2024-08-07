import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">
            Electric Vehicle Efficiency Calculator
          </Typography>
          <Paper sx={{ padding: "2rem" }}>
            <Typography>
              This page was created to provide an easy way to calculate between
              different efficiency metrics used in electric vehicles, since
              manufacturers have not standardized how efficiency is displayed.
            </Typography>
            <Divider sx={{ margin: "1rem" }} />
            <Typography>
              Feel free to get in touch with any suggestions! Enhancements are
              currently in the works for globalization and performance. More
              details to come.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
