import React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { unitOptions } from "../constants";
import { UnitOption } from "../types/efficiency";

const EfficiencyForm = () => {
  return <Box>
    <Typography variant='h4'>Calculate EV Efficiency</Typography>
    <Box sx={{mb: '1rem'}}>
      <InputLabel>Input Unit</InputLabel>
      <Select
        label='Input Unit' variant='outlined' sx={{ minWidth: '20rem' }}>
        {
          unitOptions.map((option: UnitOption) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>
          })
        }
      </Select>
      <InputLabel>Value</InputLabel>
      <TextField variant='outlined' sx={{ minWidth: '20rem' }} />
    </Box>
    <Button variant='contained' sx={{maxWidth: '10rem'}}>Calculate</Button>
  </Box>;
};

export default EfficiencyForm;
