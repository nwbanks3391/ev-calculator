import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Efficiency from "./Efficiency"

const Layout = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h3" sx={{mb: '2rem'}}>
              Electric Vehicle Efficiency Calculator
            </Typography>
          </Box>
          <Paper sx={{ padding: "2rem" }}>
            <Typography>
              This page was created to provide an easy way to calculate between
              different efficiency metrics used in electric vehicles, since
              manufacturers have not standardized how efficiency is displayed.
            </Typography>
            <Typography sx={{mt: '1rem'}}>
              For example, a Tesla Model 3 might display its efficiency as 312 Wh/mi, while a Ford Mustang Mach-E would show the same efficiency as 3.2 mi/kWh and a Polestar 2 would show the same value as 31.25 kWh/100mi. It gets confusing, so this calculator aims to help you find the efficiency quickly in a unit you're familiar with.
            </Typography>
            <Divider sx={{ margin: "1rem" }} />
            <Efficiency />
            <Divider sx={{ margin: "1rem", mt: '2rem' }} />
            <Typography sx={{ mb: '1rem', mt: '1rem' }}>
              Feel free to get in touch with any suggestions! Enhancements are
              currently in the works for globalization and performance. More
              details to come.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Layout;
