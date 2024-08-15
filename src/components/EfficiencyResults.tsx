import React from "react";
import Box from "@mui/material/Box"
import { EfficiencyResult } from "../types/efficiency";
import { unitOptions } from "../constants";
import Typography from "@mui/material/Typography";

export interface EfficiencyResultsProps {
  efficiency: EfficiencyResult | null;
}

const EfficiencyResults = ({ efficiency }: EfficiencyResultsProps) => {
  return <Box>
    {
      efficiency && unitOptions.map((unit) => {
        const propertyName: keyof EfficiencyResult = unit.value
        return <Typography>{unit.label}: {efficiency[propertyName]}</Typography>
      })
    }
  </Box>;
};

export default EfficiencyResults;
