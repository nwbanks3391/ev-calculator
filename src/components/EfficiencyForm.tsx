import React, { useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Unit, unitOptions } from "../constants";
import { EfficiencyResult, UnitOption } from "../types/efficiency";

export interface EfficiencyFormProps {
  onClick: (unit: Unit, value: number) => void;
}

const EfficiencyForm = ({ onClick }: EfficiencyFormProps) => {
  const [unit, setUnit] = useState<Unit | null>(null);
  const [value, setValue] = useState<number | null>(null);

  const onButtonClick = () => {
    if (unit && value) {
      onClick(unit, value);
    }
  };

  const formSetState = (e: any, name: string) => {
    try {
      switch (name){
        case 'unit': 
          setUnit(e.target.value)
          break;
        case 'value':
          const val = parseFloat(e.target.value)
          setValue(val)
          break;
        default:
          break;
      }
    } catch (error) {
      console.log('formSetState error', error)
    }
  }


  return (
    <Box>
      <Typography variant="h4">Calculate EV Efficiency</Typography>
      <Box sx={{ mb: "1rem" }}>
        <InputLabel>Input Unit</InputLabel>
        <Select
          label="Input Unit"
          variant="outlined"
          sx={{ minWidth: "20rem" }}
          onChange={(e) => formSetState(e, 'unit')}
        >
          {unitOptions.map((option: any) => {
            return <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>;
          })}
        </Select>
        <InputLabel>Value</InputLabel>
        <TextField
          variant="outlined"
          sx={{ minWidth: "20rem" }}
          onChange={(e) => formSetState(e, 'value')}
        />
      </Box>
      <Button variant="contained" sx={{ maxWidth: "10rem" }} onClick={onButtonClick}>
        Calculate
      </Button>
    </Box>
  );
};

export default EfficiencyForm;
