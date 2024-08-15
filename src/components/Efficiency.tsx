import React, { useState } from 'react'
import Grid from "@mui/material/Grid"
import EfficiencyForm from './EfficiencyForm'
import EfficiencyResults from './EfficiencyResults'
import { EfficiencyResult } from '../types/efficiency'
import { Unit } from '../constants'

type Props = {}

const Efficiency = (props: Props) => {
    const [efficiency, setEfficiency] = useState<EfficiencyResult | null>(null)
    const calcEfficiency = (unit: Unit, value: number) => {
        if(unit && value){
            
        }
    }
  return (
    <Grid container>
        <Grid item xs={12} md={6}>
            <EfficiencyForm />
        </Grid>
        <Grid item xs={12} md={6}>
            <EfficiencyResults />
        </Grid>
    </Grid>
  )
}

export default Efficiency;