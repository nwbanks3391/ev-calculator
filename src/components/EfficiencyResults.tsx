import React from "react";
import Box from "@mui/material/Box";
import { EfficiencyResult } from "../types/efficiency";
import { unitOptions } from "../constants";
import Typography from "@mui/material/Typography";

export interface EfficiencyResultsProps {
  efficiency: EfficiencyResult | null;
}

const EfficiencyResults = ({ efficiency }: EfficiencyResultsProps) => {
  return (
    <Box>
      <Typography variant="h5">Results:</Typography>
      {efficiency &&
        unitOptions.map((unit) => {
          const propertyName: keyof EfficiencyResult = unit.value;
          return (
            <Typography sx={{ my: ".5rem" }} component="div">
              <Box fontWeight="bold" display="inline">
                {unit.label}:
              </Box>
              {` ${efficiency[propertyName].toFixed(2)}`}
            </Typography>
          );
        })}
    </Box>
  );
};

export default EfficiencyResults;
